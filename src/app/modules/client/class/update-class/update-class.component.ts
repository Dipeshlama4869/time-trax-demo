import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Branch } from '../../_models/branch';
import { Class } from '../../_models/class';
import { AddBranchService } from '../../../../_services/add-branch.service';
import { ClassService } from 'src/app/_services/class.service';


@Component({
  selector: 'app-update-class',
  templateUrl: './update-class.component.html',
  styleUrls: ['./update-class.component.scss']
})
export class UpdateClassComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  id: number;
  clas: Class;

  constructor(private classService: ClassService) { }

  ngOnInit(): void {
    this.loadClass();
  }

  loadClass() {
    this.classService.getClass(this.id).subscribe((clas) => {
      this.clas = clas;
    })
  }

  updateClass() {
    this.classService.updateClass(this.id,this.clas).subscribe(() => {
      this.editForm.reset(this.clas);
    })
  }
}
