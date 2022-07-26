import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Branch } from '../modules/client/_models/branch';

@Injectable({
  providedIn: 'root'
})
export class AddBranchService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  add(branch: Branch){
    return this.http.post(this.baseUrl + '/Branches', branch)
  }

  getBranchList() {
    return  this.http.get<Branch[]>(this.baseUrl + '/Branches');
  }

  deleteBranch(name: string) {
    return this.http.delete(this.baseUrl + '/Branches' + name)
  }

  updateBranch(id: number, branch: Branch){
    return this.http.put(this.baseUrl + '/Branches' + id, branch)
  }

  getBranch(id: number){
    return this.http.get<Branch>(this.baseUrl + '/Branches' + id)
  }
}
