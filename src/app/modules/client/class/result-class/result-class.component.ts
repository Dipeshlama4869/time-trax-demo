import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClassService } from 'src/app/_services/class.service';
import { environment } from 'src/environments/environment';
import { Class } from '../../_models/class';

@Component({
  selector: 'app-result-class',
  templateUrl: './result-class.component.html',
  styleUrls: ['./result-class.component.scss']
})
export class ResultClassComponent implements OnInit {
  baseUrl = environment.apiUrl;

  elementData: Class[] = [];
  isLoading = false;
  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  columnSort = "ClassId";
  sortDirection = "asc";
  pageSizeOptions: number[] = [5, 10 , 25, 100];

  displayedColumns: string[] = ['ClassId','ClassName'];
  dataSource: MatTableDataSource<Class> = new MatTableDataSource();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private classService: ClassService){}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  ngOnInit(){
    this.loadData();
  }

  loadData() {
    this.isLoading = true;
    let URL = `https://localhost:7182/Classes?page=${this.currentPage + 1}&limit=${this.pageSize}&sortColumn=${this.columnSort}&sortDirection=${this.sortDirection}`
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
  }
  // classes: Partial<Class[]>;


  // constructor(private classService: ClassService, ) { }

  // ngOnInit(): void {
  //   this.getClasses();
  // }

  // getClasses() {
  //   this.classService.getClassList().subscribe(classes => {
  //     this.classes = classes;
  //   })
  // }

  // deleteClass(id: number) {
  //   this.classService.deleteClass(id).subscribe(() => {})
  // }
  
