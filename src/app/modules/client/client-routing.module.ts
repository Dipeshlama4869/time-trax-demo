import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { BranchComponent } from './branch/branch.component';
import { AddComponent } from './branch/add/add.component';
import { UpdateComponent } from './branch/update/update.component';
import { ClassComponent } from './class/class.component';
import { AddClassComponent } from './class/add-class/add-class.component';


const routes: Routes = [
  {
    path: 'attendance',
    component: AttendanceComponent,
    data: { title: ':: Time Trax :: Attendance'}
  },
  {
    path: 'branch',
    component: BranchComponent,
    data: { title: ':: Time Trax :: Branch' }
  },
  {
    path: 'branch-add',
    component: AddComponent,
    data: { title: ':: Time Trax :: Add Branch' }
  },
  {
    path: 'branch-update',
    component: UpdateComponent,
    data: { title: ':: Time Trax :: Update Branch' }
  },
  {
    path: 'class',
    component: ClassComponent,
    data: { title: ':: Time Trax :: Class' }
  },
  {
    path: 'class-add',
    component: AddClassComponent,
    data: { title: ':: Time Trax :: Class' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {
  static components = [
  ];

}