import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogService } from 'src/app/_services/confirm-dialog.service';
import { HolidayService } from 'src/app/_services/holiday.service';
import { environment } from 'src/environments/environment';
import { Holiday } from '../_models/holiday';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.scss']
})
export class HolidayComponent implements OnInit {
  baseUrl = environment.apiUrl;

  elementData: Holiday[] = [];
  isLoading = false;
  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  columnSort = "";
  sortDirection = "";
  pageSizeOptions: number[] = [5, 10 , 25, 100];

  displayedColumns: string[] = ['HolidayId','HolidayName','Date', 'Edit'];
  dataSource: MatTableDataSource<Holiday> = new MatTableDataSource();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private holidayService: HolidayService, private toastr: ToastrService, private dialogService: ConfirmDialogService) { }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.isLoading = true;
    let URL = `${this.baseUrl}/Holidays?page=${this.currentPage + 1}&limit=${this.pageSize}&sortColumn=${this.columnSort}&sortDirection=${this.sortDirection}`
    console.log(URL)

      fetch(URL)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.dataSource.data = data.Data;
        setTimeout(() => {
          this.paginator.pageIndex = this.currentPage;
          this.paginator.length = data.TotalCount;
        });
        this.isLoading = false;
      }, error => {
        console.log(error);
        this.isLoading = false;
      });
  }

    pageChanged(event: PageEvent) {
      console.log({ event });
      this.pageSize = event.pageSize;
      this.currentPage = event.pageIndex;
      this.loadData();
    }

    delete(id: number) {
      console.log(id)
      this.dialogService.openConfirmDialog('Are you sure to delete this record?').afterClosed().subscribe(res => {
        if(res){
          this.holidayService.delete(id).subscribe(() => {
            this.toastr.success('Deleted Succesfully')
            this.ngOnInit();
          })
        }
      });

    }

}
