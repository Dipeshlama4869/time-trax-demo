import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeService } from 'src/app/_services/mode.service';

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

  constructor(private fb: FormBuilder, private router: Router, private modeService: ModeService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.addForm = this.fb.group({
      ModeId: [''],
      ModeName: ['', Validators.required],
      ModeAbbreviation: ['', Validators.required]
    })
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
