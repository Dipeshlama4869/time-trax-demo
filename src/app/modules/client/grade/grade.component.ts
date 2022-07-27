import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogService } from 'src/app/_services/confirm-dialog.service';
import { GradeService } from 'src/app/_services/grade.service';
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
  columnSort = "";
  sortDirection = "";
  pageSizeOptions: number[] = [5,10,25,100] 
  displayedColumns: string[] = ['GradeId', 'GradeName', 'GradeType', 'GradeTypes', 'Edit']
  dataSource: MatTableDataSource<Grade> = new MatTableDataSource();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(private dialogService: ConfirmDialogService, private gradeService: GradeService, private toastr: ToastrService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.isLoading = true;
    let URL = `${this.baseUrl}/Grades?page=${this.currentPage + 1}&limit=${this.pageSize}&sortDirection=${this.sortDirection}`

    fetch(URL, {
      headers: new Headers({
        'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('user')).Token
      })
    }).then(response => response.json())
    .then(data => {
      console.log(data)
      this.dataSource.data = data.Data;
      setTimeout(() => {
        this.paginator.pageIndex = this.currentPage;
        this.paginator.length = data.TotalCount;
      })
      console.log(data.Data)
      this.isLoading = false;
    }, error => {
      console.log(error);
      this.isLoading = false;
    })
  }

  pageChanged(event: PageEvent) {
    console.log({ event });
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.loadData();
  }

  delete(id: number) {
    this.dialogService.openConfirmDialog('Are you sure to delete this record?').afterClosed().subscribe(res => {
      if(res){
        this.gradeService.delete(id).subscribe(() => {
          this.toastr.success('Deleted Succesfully')
          this.ngOnInit();
        })
      }
    });
  }
}
