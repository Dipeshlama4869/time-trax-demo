import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StatusService } from 'src/app/_services/status.service';

@Component({
  selector: 'app-add-status',
  templateUrl: './add-status.component.html',
  styleUrls: ['./add-status.component.scss']
})
export class AddStatusComponent implements OnInit {
  isError: boolean = false;
  errorMessage: string;
  addForm: FormGroup;
  validationErrors: string[] = [];

  constructor(private fb: FormBuilder, private router: Router, private statusService: StatusService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.addForm = this.fb.group({
      StatusId: [''],
      StatusName: ['', Validators.required],
    })
  }

  addStatus() {
    console.log(this.addForm.value)
    this.statusService.add(this.addForm.value).subscribe(response => {
      this.router.navigateByUrl('/status');
      console.log(response)
    }, error => {
      this.errorMessage = error.error[0].Description;
      this.isError = !this.isError
    })
  }
}
