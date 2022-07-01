import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { Class } from '../../_models/class';
import { ClassService } from '../../_services/class.service';

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
  pageSizeOptions: number[] = [5, 10 , 25, 100];

  displayedColumns: string[] = ['ClassName'];
  dataSource: MatTableDataSource<Class> = new MatTableDataSource();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.isLoading = true;
    let URL = this.baseUrl + 'Classes'

      fetch(URL)
      .then(response => response.json())
      .then(data => {
        this.dataSource.data = data.rows;
        setTimeout(() => {
          this.paginator.pageIndex = this.currentPage;
          this.paginator.length = data.count;
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
  
