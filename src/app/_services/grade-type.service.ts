import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GradeType } from '../modules/client/_models/grade';

@Injectable({
  providedIn: 'root'
})
export class GradeTypeService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  add(gradeType: GradeType){
    return this.http.post(this.baseUrl + '/GradeTypes', gradeType);
  }

  getList(page: number,limit: number ) {
    return  this.http.get<GradeType[]>(this.baseUrl + '/GradeTypes?page='+ page + '&limit=' + limit );
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + '/GradeTypes/' + id)
  }

  update(id: number, gradeType: GradeType){
    return this.http.put(this.baseUrl + '/GradeTypes/' + id, gradeType)
  }

}
