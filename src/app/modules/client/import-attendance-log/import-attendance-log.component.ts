import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ImportAttendanceLogService } from 'src/app/_services/import-attendance-log.service';
import { environment } from 'src/environments/environment';
import { ImportAttendanceLog } from '../_models/importAttendanceLog';

@Component({
  selector: 'app-import-attendance-log',
  templateUrl: './import-attendance-log.component.html',
  styleUrls: ['./import-attendance-log.component.scss']
})
export class ImportAttendanceLogComponent implements OnInit {
  baseUrl = environment.apiUrl;

  elementData: ImportAttendanceLog[] = [];
  isLoading = false;
  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  sortColumn = "Id";
  sortDirection = "asc";
  pageSizeOptions: number[] = [5, 10 , 25, 100];

  displayedColumns: string[] = ['Id', 'Filename', 'Status', 'UploadedAt', 'Edit']
  dataSource: MatTableDataSource<ImportAttendanceLog> = new MatTableDataSource();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private importAttendanceLogService: ImportAttendanceLogService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.isLoading = true;
    let URL = `https://localhost:7182/ImportAttendanceLogs?page=${this.currentPage + 1}&limit=${this.pageSize}&sortColumn=${this.sortColumn}&sortDirection=${this.sortDirection}`
    console.log(URL);

    fetch(URL)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.dataSource.data = data.Data;
        setTimeout(() => {
          this.paginator.pageIndex = this.currentPage;
          this.paginator.length = data.TotalCount;
        })
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

}
