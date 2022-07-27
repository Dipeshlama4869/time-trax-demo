import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccordionComponent } from 'ngx-bootstrap/accordion';
import { AddBranchService } from '../../../../_services/add-branch.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  isError: boolean = false;
  errorMessage: string;
  addForm: FormGroup;
  validationErrors: string[] = [];


  constructor(private addBranchService: AddBranchService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this,this.initializeForm();
  }

  initializeForm() {
    this.addForm = this.fb.group({
      BranchName: ['', Validators.required],
      IsOutBranch: [0, Validators.required],
      Address: ['', Validators.required],
      Contact: ['', Validators.required],
    })
  }

  addBranch() {
    this.addBranchService.add(this.addForm.value).subscribe(response => {
      this.router.navigateByUrl('/branch');
    }, error => {
      console.log(error)

    })

  }

}
