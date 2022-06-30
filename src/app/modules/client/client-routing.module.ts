import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { FormElementComponent } from './form-element/form-element.component';
import { ChartsComponent } from './charts/charts.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { CalenderComponent } from './calender/calender.component';
import { FilemanagerComponent } from './filemanager/filemanager.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SettingsComponent } from './settings/settings.component';
import { MapsComponent } from './maps/maps.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { WCardComponent } from './widgets/w-card/w-card.component';
import { WStaticsComponent } from './widgets/w-statics/w-statics.component';
import { WDataComponent } from './widgets/w-data/w-data.component';
import { WSocialComponent } from './widgets/w-social/w-social.component';
import { WOtherComponent } from './widgets/w-other/w-other.component';
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
  {
    path: 'search',
    component: SearchComponent,
    data: { title: ':: Time Trax :: Search' }
  },
  {
    path: 'calender',
    component: CalenderComponent,
    data: { title: ':: Time Trax :: Calender' }
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    data: { title: ':: Time Trax :: Contacts' }
  },
  {
    path: 'chat',
    component: ChatComponent,
    data: { title: ':: Time Trax ::  Chat' }
  },
  {
    path: 'filemanager',
    component: FilemanagerComponent,
    data: { title: ':: Time Trax ::  Filemanager' }
  },
  {
    path: 'map',
    component: MapsComponent,
    data: { title: ':: Time Trax :: Maps' }
  },
  {
    path: 'charts',
    component: ChartsComponent,
    data: { title: ':: Time Trax :: Charts' }
  },
  {
    path: 'formelement',
    component: FormElementComponent,
    data: { title: ':: Time Trax :: Forms' }
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: { title: ':: Time Trax :: Settings' }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { title: ':: Time Trax :: Profile' }
  },
  {
    path: 'widgets',
    component: WidgetsComponent,
    data: { title: ':: Time Trax :: Widgets' }
  },
  {
    path: 'widgets-card',
    component: WCardComponent,
    data: { title: ':: Time Trax :: Widgets' }
  },
  {
    path: 'widgets-statistics',
    component: WStaticsComponent,
    data: { title: ':: Time Trax :: Widgets' }
  },
  {
    path: 'widgets-data',
    component: WDataComponent,
    data: { title: ':: Time Trax :: Widgets' }
  },
  {
    path: 'widgets-social',
    component: WSocialComponent,
    data: { title: ':: Time Trax :: Widgets' }
  },
  {
    path: 'widgets-other',
    component: WOtherComponent,
    data: { title: ':: Time Trax :: Widgets' }
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