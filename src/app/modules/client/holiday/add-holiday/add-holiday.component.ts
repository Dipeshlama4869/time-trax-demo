import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HolidayService } from 'src/app/_services/holiday.service';

@Component({
  selector: 'app-add-holiday',
  templateUrl: './add-holiday.component.html',
  styleUrls: ['./add-holiday.component.scss']
})
export class AddHolidayComponent implements OnInit {
  isError: boolean = false;
  errorMessage: string;
  addForm: FormGroup;
  validationErrors: string[] = [];

  constructor(private fb: FormBuilder, private router: Router, private holidayService: HolidayService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.addForm = this.fb.group({
      HolidayId: ['', Validators.required ],
      HolidayName: [''],
      HolidayDate: [''],
      HolidayQuantity: [''],
    })
  }

  addHoliday() {
    console.log(this.addForm.value)
    this.holidayService.add(this.addForm.value).subscribe(response => {
      this.router.navigateByUrl('/holiday');
      console.log(response)
    }, error => {
      this.errorMessage = error.error[0].Description;
      this.isError = !this.isError
    })
  }
}
