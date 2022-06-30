import { Component, OnInit } from '@angular/core';
import { Branch } from '../../_models/branch';
import { AddBranchService } from '../../_services/add-branch.service';

@Component({
  selector: 'app-result-class',
  templateUrl: './result-class.component.html',
  styleUrls: ['./result-class.component.scss']
})
export class ResultClassComponent implements OnInit {
  branches: Partial<Branch[]>;


  constructor(private addBranchService: AddBranchService, ) { }

  ngOnInit(): void {
    this.getBranches();
  }

  getBranches() {
    this.addBranchService.getBranchList().subscribe(branches => {
      this.branches = branches;
    })
  }

  deleteBranch(name: string) {
    this.addBranchService.deleteBranch(name).subscribe(() => {})
  }
  
}
