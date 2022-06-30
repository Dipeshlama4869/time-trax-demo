import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddBranchService } from '../../_services/add-branch.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent implements OnInit {
  addForm: FormGroup;
  validationErrors: string[] =[];

  constructor(private addBranchService: AddBranchService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this,this.initializeForm();
  }

  initializeForm() {
    this.addForm = this.fb.group({
      branchName: ['', Validators.required],
      isOutBranch: [0, Validators.required],
      address: ['', Validators.required],
      contact: ['', Validators.required],
    })
  }

  addBranch() {
    this.addBranchService.add(this.addForm.value).subscribe(response => {
      this.router.navigateByUrl('/branch');
    }, error => {
      this.validationErrors = error;
    })
  }

}
