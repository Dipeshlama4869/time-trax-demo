import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Class } from '../modules/client/_models/class';


@Injectable({
  providedIn: 'root'
})
export class ClassService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  add(clas: Class){
    return this.http.post(this.baseUrl + '/Classes', clas);
  }

  getClassList(page: number,limit: number ) {
    return  this.http.get<Class[]>(this.baseUrl + '/Classes?page='+ page + '&limit=' + limit );
  }

  deleteClass(id: number) {
    return this.http.delete(this.baseUrl + '/Classes/' + id)
  }

  updateClass(id: number, clas: Class){
    return this.http.put(this.baseUrl + '/Classes/' + id, clas)
  }

  getClass(id: number){
    return this.http.get<Class>(this.baseUrl + '/Classes/' + id)
  }
}
