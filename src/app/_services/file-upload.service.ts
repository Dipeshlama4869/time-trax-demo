import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  baseUrl = environment.apiUrl;
  baseApiUrl = this.baseUrl + '/ImportAttendanceLogs/import'

  constructor(private http: HttpClient) { }
  
  upload(Files: FormData) :Observable<any> {
    Files.forEach((value,key) => {
      console.log(key+" "+value)
    });
    
    // Store form name as "file" with file data
      
    // Make http post request over api
    // with Files as req
    return this.http.post(this.baseApiUrl, Files)
  }
}
