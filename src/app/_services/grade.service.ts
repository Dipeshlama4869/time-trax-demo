import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Grade } from '../modules/client/_models/grade';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  add(grade: Grade){
    return this.http.post(this.baseUrl + '/Grades', grade);
  }

  getList(page: number,limit: number ) {
    return  this.http.get<Grade[]>(this.baseUrl + '/Grades?page='+ page + '&limit=' + limit );
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + '/Grades/' + id)
  }

  update(id: number, grade: Grade){
    return this.http.put(this.baseUrl + '/Grades/' + id, grade)
  }

  getGrade(id: number){
    return this.http.get<Grade>(this.baseUrl + '/Grades/' + id)
  }
}
