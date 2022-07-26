import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Holiday } from '../modules/client/_models/holiday';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  add(grade: Holiday){
    return this.http.post(this.baseUrl + '/Holidays', grade);
  }

  getList(page: number,limit: number ) {
    return  this.http.get<Holiday[]>(this.baseUrl + '/Holidays?page='+ page + '&limit=' + limit );
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + '/Holidays/' + id)
  }

  update(id: number, grade: Holiday){
    return this.http.put(this.baseUrl + '/Holidays/' + id, grade)
  }

  getHoliday(id: number){
    return this.http.get<Holiday>(this.baseUrl + '/Holidays/' + id)
  }
}
