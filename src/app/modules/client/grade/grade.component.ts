import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Grade } from '../_models/grade';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit {
  baseUrl = environment.apiUrl;

  elementData: Grade[] = [];
  isLoading = false;
  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  columnSort = "ClassId";
  sortDirection = "asc";
  pageSizeOptions: number[] = [5, 10 ,15, 20, 25] 

  constructor() { }

  ngOnInit(): void {
  }

}
