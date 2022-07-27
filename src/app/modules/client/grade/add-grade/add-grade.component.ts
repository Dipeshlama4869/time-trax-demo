import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GradeService } from 'src/app/_services/grade.service';

@Component({
  selector: 'app-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.scss']
})
export class AddGradeComponent implements OnInit {
  isError: boolean = false;
  errorMessage: string;
  addForm: FormGroup;
  validationErrors: string[] = [];

  constructor(private fb: FormBuilder, private router: Router, private gradeService: GradeService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.addForm = this.fb.group({
      GradeId: ['', Validators.required ],
      GradeName: [''],
      GradeType: [''],
      GradeTypes: [''],
    })
  }

 
  addGrade() {
    console.log(this.addForm.value)
    this.gradeService.add(this.addForm.value).subscribe(response => {
      this.router.navigateByUrl('/grade');
      console.log(response)
    }, error => {
      this.errorMessage = error.error[0].Description;
      this.isError = !this.isError
    })
  }


}
