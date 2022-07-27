import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogService } from 'src/app/_services/confirm-dialog.service';
import { ModeService } from 'src/app/_services/mode.service';
import { environment } from 'src/environments/environment';
import { Mode } from '../_models/mode';

@Component({
  selector: 'app-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.scss']
})
export class ModeComponent implements OnInit {
  baseUrl = environment.apiUrl;

  elementData: Mode[] = [];

  isLoading = false;
  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  columnSort = "";
  sortDirection = "";
  pageSizeOptions: number[] = [5,10,25,100] 
  displayedColumns: string[] = ['ModeId','ModeName', 'Abbreviation', 'Edit']
  dataSource: MatTableDataSource<Mode> = new MatTableDataSource();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(private dialogService: ConfirmDialogService, private modeService: ModeService,private router: Router, private toastr: ToastrService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.isLoading = true;
    let URL = `${this.baseUrl}/Modes?page=${this.currentPage + 1}&limit=${this.pageSize}&sortDirection=${this.sortDirection}`

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
        this.modeService.delete(id).subscribe(() => {
          this.toastr.success('Deleted Succesfully')
          this.ngOnInit();
        })
      }
    });
  }

  editPageOpen(id : number) {
    this.router.navigate(['/mode-add', id]);
  }
}
