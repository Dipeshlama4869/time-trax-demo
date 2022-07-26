import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Mode } from '../modules/client/_models/mode';

@Injectable({
  providedIn: 'root'
})
export class ModeService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  add(grade: Mode){
    return this.http.post(this.baseUrl + '/Modes', grade);
  }

  getList(page: number,limit: number ) {
    return  this.http.get<Mode[]>(this.baseUrl + '/Modes?page='+ page + '&limit=' + limit );
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + '/Modes/' + id)
  }

  update(id: number, grade: Mode){
    return this.http.put(this.baseUrl + '/Modes/' + id, grade)
  }

  getMode(id: number){
    return this.http.get<Mode>(this.baseUrl + '/Modes/' + id)
  }
}
