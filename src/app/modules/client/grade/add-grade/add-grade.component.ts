import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.scss']
})
export class AddGradeComponent implements OnInit {
  addForm: FormGroup;
  validationErrors: string[] = [];

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  initializeForm() {
    this.addForm = this.fb.group({
      
    })
  }

}
