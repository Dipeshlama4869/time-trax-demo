import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeService } from 'src/app/_services/mode.service';
import { Mode } from '../../_models/mode';

@Component({
  selector: 'app-add-mode',
  templateUrl: './add-mode.component.html',
  styleUrls: ['./add-mode.component.scss']
})
export class AddModeComponent implements OnInit {
  isError: boolean = false;
  errorMessage: string;
  addForm: FormGroup;
  validationErrors: string[] = [];

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private modeService: ModeService) { }

  ngOnInit(): void {
      this.addForm = this.fb.group({
        ModeId: [''],
        ModeName: ['', Validators.required],
        ModeAbbreviation: ['', Validators.required]
      })

      this.route.paramMap.subscribe(params => {
        const id = +params.get('id');
        if(id){
          this.modeService.getMode(id).subscribe(x => this.addForm.patchValue(x));
        }
      })
  }

    getMode(id: number) {
    this.modeService.getMode(id).subscribe(
      (mode: Mode) => this.editMode(mode),
      (err: any) => console.log()
    )
  }

  editMode(mode: Mode){
    this.addForm.patchValue({
      ModeId: mode.ModeId,
      ModeName: mode.ModeName,
      ModeAbbreviation: mode.ModeAbbreviation,
    })

    console.log(this.addForm.value);
  }



 
  addMode() {
    console.log(this.addForm.value)
    this.modeService.add(this.addForm.value).subscribe(response => {
      this.router.navigateByUrl('/mode');
      console.log(response)
    }, error => {
      this.errorMessage = error.error[0].Description;
      this.isError = !this.isError
    })
  }
}
