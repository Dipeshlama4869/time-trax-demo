import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { BranchComponent } from './branch/branch.component';
import { AddComponent } from './branch/add/add.component';
import { UpdateComponent } from './branch/update/update.component';
import { ClassComponent } from './class/class.component';
import { AddClassComponent } from './class/add-class/add-class.component';
import { GradeComponent } from './grade/grade.component';
import { HolidayComponent } from './holiday/holiday.component';
import { ModeComponent } from './mode/mode.component';
import { AddModeComponent } from './mode/add-mode/add-mode.component';
import { AddHolidayComponent } from './holiday/add-holiday/add-holiday.component';
import { AddGradeComponent } from './grade/add-grade/add-grade.component';
import { StatusComponent } from './status/status.component';
import { AddStatusComponent } from './status/add-status/add-status.component';


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
    path: 'grade',
    component: GradeComponent,
    data: { title: ':: Time Trax :: Grade' }
  },
  {
    path: 'grade-add',
    component: AddGradeComponent,
    data: { title: ':: Time Trax :: Add Branch' }
  },
  {
    path: 'holiday',
    component: HolidayComponent,
    data: { title: ':: Time Trax :: Holiday' }
  },
  {
    path: 'holiday-add',
    component: AddHolidayComponent,
    data: { title: ':: Time Trax :: Add Branch' }
  },
  {
    path: 'mode',
    component: ModeComponent,
    data: { title: ':: Time Trax :: mode' }
  },
  {
    path: 'mode-add',
    component: AddModeComponent,
    data: { title: ':: Time Trax :: Add mode' }
  },
  {
    path: 'status',
    component: StatusComponent,
    data: { title: ':: Time Trax :: status' }
  },
  {
    path: 'status-add',
    component: AddStatusComponent,
    data: { title: ':: Time Trax :: Add status' }
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