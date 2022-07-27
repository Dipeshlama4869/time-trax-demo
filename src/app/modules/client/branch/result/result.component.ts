import { Component, OnInit, ViewChild } from '@angular/core';
import { Branch } from '../../_models/branch';
import { AddBranchService } from '../../../../_services/add-branch.service';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogService } from 'src/app/_services/confirm-dialog.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  baseUrl = environment.apiUrl;

  elementData: Branch[] = [];
  isLoading = false;
  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  columnSort = "";
  sortDirection = "";
  pageSizeOptions: number[] = [5, 10 , 25, 100];

  displayedColumns: string[] = ['BranchId', 'BranchName', 'IsOutBranch', 'Address', 'Contact', 'Edit'];
  dataSource: MatTableDataSource<Branch> = new MatTableDataSource();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private branchService: AddBranchService, private toastr: ToastrService, private dialogService: ConfirmDialogService){}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  ngOnInit(){
    this.loadData();
  }

  loadData() {
    this.isLoading = true;
    let URL = `${this.baseUrl}/Branches?page=${this.currentPage + 1}&limit=${this.pageSize}&sortColumn=${this.columnSort}&sortDirection=${this.sortDirection}`
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
          this.branchService.deleteBranch(id).subscribe(() => {
            this.toastr.success('Deleted Succesfully')
            this.ngOnInit();
          })
        }
      });

    }
  
}
