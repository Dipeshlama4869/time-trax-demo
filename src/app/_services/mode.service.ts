import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mode } from '../modules/client/_models/mode';

@Injectable({
  providedIn: 'root'
})
export class ModeService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  add(mode: Mode){
    return this.http.post(this.baseUrl + '/Modes', mode);
  }

  getList(page: number,limit: number ) {
    return  this.http.get<Mode[]>(this.baseUrl + '/Modes?page='+ page + '&limit=' + limit );
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + '/Modes/' + id)
  }

  update(id: number, mode: Mode){
    return this.http.put(this.baseUrl + '/Modes/' + id, mode)
  }

  getMode(id: number): Observable<Mode>{
    return this.http.get<Mode>(this.baseUrl + '/Modes/' + id)
  }
}
