import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeService } from 'src/app/_services/mode.service';
import { Mode } from '../../_models/mode';

@Component({
  selector: 'app-edit-mode',
  templateUrl: './edit-mode.component.html',
  styleUrls: ['./edit-mode.component.scss']
})
export class EditModeComponent implements OnInit {
  addForm: FormGroup;
  validationErrors: string[] = [];

  modeDetails: Mode ={
    ModeId: 0,
    ModeName: '',
    ModeAbbreviation: ''
  }

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private modeService: ModeService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      if(id){
        this.getMode(id);
      }
    })

    this.initializeForm();
  }
  getMode(id: number) {
    this.modeService.getMode(id).subscribe(
      (mode: Mode) => this.editMode(mode),
      (err: any) => console.log()
    )
  }

  initializeForm() {
    this.addForm = this.fb.group({
      ModeId: [''],
      ModeName: ['', Validators.required],
      ModeAbbreviation: ['', Validators.required]
    })
  }

  editMode(mode: Mode){
    this.addForm.patchValue({
      ModeId: mode.ModeId,
      ModeName: mode.ModeName,
      ModeAbbreviation: mode.ModeAbbreviation,
    })

    console.log(this.addForm.value);
  }



}
