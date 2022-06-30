import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Branch } from '../../_models/branch';
import { AddBranchService } from '../../_services/add-branch.service';

@Component({
  selector: 'app-update-class',
  templateUrl: './update-class.component.html',
  styleUrls: ['./update-class.component.scss']
})
export class UpdateClassComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  id: number;
  branch: Branch;

  constructor(private addBranchService: AddBranchService) { }

  ngOnInit(): void {
    this.loadBranch();
  }

  loadBranch() {
    this.addBranchService.getBranch(this.id).subscribe((branch) => {
      this.branch = branch;
    })
  }

  updateBranch() {
    this.addBranchService.updateBranch(this.id,this.branch).subscribe(() => {
      this.editForm.reset(this.branch);
    })
  }
}
