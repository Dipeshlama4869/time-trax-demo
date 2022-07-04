import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassService } from '../../_services/class.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent implements OnInit {
  addClassForm: FormGroup;
  validationErrors: string[] =[];

  constructor(private classService: ClassService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.addClassForm = this.fb.group({
      ClassName: ['', Validators.required],
    })
  }

  addClass() {
    console.log(this.addClassForm.value)
    this.classService.add(this.addClassForm.value).subscribe(response => {
      this.router.navigateByUrl('/class');
      console.log(response)
    }, error => {
      this.validationErrors = error;
    })
  }

}
