import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GradeTypeService } from 'src/app/_services/grade-type.service';

@Component({
  selector: 'app-add-grade-type',
  templateUrl: './add-grade-type.component.html',
  styleUrls: ['./add-grade-type.component.scss']
})
export class AddGradeTypeComponent implements OnInit {
  isError: boolean = false;
  errorMessage: string;
  addForm: FormGroup;
  validationErrors: string[] = [];

  constructor(private fb: FormBuilder, private router: Router, private gradeTypeService: GradeTypeService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.addForm = this.fb.group({
      GType: ['', Validators.required ],
    })
  }

 
  addGrade() {
    console.log(this.addForm.value)
    this.gradeTypeService.add(this.addForm.value).subscribe(response => {
      this.router.navigateByUrl('/grade');
      console.log(response)
    }, error => {
      this.errorMessage = error.error[0].Description;
      this.isError = !this.isError
    })
  }

}
