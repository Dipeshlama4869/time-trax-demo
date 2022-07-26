import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Status } from '../modules/client/_models/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  add(grade: Status){
    return this.http.post(this.baseUrl + '/Statuses', grade);
  }

  getList(page: number,limit: number ) {
    return  this.http.get<Status[]>(this.baseUrl + '/Statuses?page='+ page + '&limit=' + limit );
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + '/Statuses/' + id)
  }

  update(id: number, grade: Status){
    return this.http.put(this.baseUrl + '/Statuses/' + id, grade)
  }

  getStatus(id: number){
    return this.http.get<Status>(this.baseUrl + '/Statuses/' + id)
  }
}
