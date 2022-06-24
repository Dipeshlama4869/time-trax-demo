import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { FormElementComponent } from './form-element/form-element.component';
import { TablesComponent } from './UI-ELEMENTS/tables/tables.component';
import { ChartsComponent } from './charts/charts.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { CalenderComponent } from './calender/calender.component';
import { FilemanagerComponent } from './filemanager/filemanager.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SettingsComponent } from './settings/settings.component';
import { MapsComponent } from './maps/maps.component';
import { ProfileComponent } from './profile/profile.component';
import { HrDashboardComponent } from './HRMS/hr-dashboard/hr-dashboard.component';
import { HrUsersComponent } from './HRMS/hr-users/hr-users.component';
import { HrDepartmentsComponent } from './hrms/hr-departments/hr-departments.component';
import { HrEmployeeComponent } from './hrms/hr-employee/hr-employee.component';
import { HrActivitiesComponent } from './hrms/hr-activities/hr-activities.component';
import { HrHolidaysComponent } from './hrms/hr-holidays/hr-holidays.component';
import { HrEventsComponent } from './hrms/hr-events/hr-events.component';
import { HrPayrollComponent } from './hrms/hr-payroll/hr-payroll.component';
import { HrAccountsComponent } from './hrms/hr-accounts/hr-accounts.component';
import { HrReportComponent } from './hrms/hr-report/hr-report.component';
import { HRMSComponent } from './hrms/hrms.component';
import { SearchComponent } from './search/search.component';
import { PrDashboardComponent } from './project/pr-dashboard/pr-dashboard.component';
import { PrProjectlistComponent } from './project/pr-projectlist/pr-projectlist.component';
import { PrTaskboardComponent } from './project/pr-taskboard/pr-taskboard.component';
import { PrTicketlistComponent } from './project/pr-ticketlist/pr-ticketlist.component';
import { PrTicketdetailsComponent } from './project/pr-ticketdetails/pr-ticketdetails.component';
import { PrClientsComponent } from './project/pr-clients/pr-clients.component';
import { PrTodolistComponent } from './project/pr-todolist/pr-todolist.component';
import { ProjectComponent } from './project/project.component';
import { JobPortalComponent } from './job-portal/job-portal.component';
import { JobportalDashboardComponent } from './job-portal/jobportal-dashboard/jobportal-dashboard.component';
import { JobportalPositionsComponent } from './job-portal/jobportal-positions/jobportal-positions.component';
import { JobportalApplicantsComponent } from './job-portal/jobportal-applicants/jobportal-applicants.component';
import { JobportalResumesComponent } from './job-portal/jobportal-resumes/jobportal-resumes.component';
import { JobportalSettingsComponent } from './job-portal/jobportal-settings/jobportal-settings.component';
import { IconFontawesomeComponent } from './UI-ELEMENTS/icons/icon-fontawesome/icon-fontawesome.component';
import { IconFeatherComponent } from './UI-ELEMENTS/icons/icon-feather/icon-feather.component';
import { IconLinesComponent } from './UI-ELEMENTS/icons/icon-lines/icon-lines.component';
import { IconFlagsComponent } from './UI-ELEMENTS/icons/icon-flags/icon-flags.component';
import { IconPaymentsComponent } from './UI-ELEMENTS/icons/icon-payments/icon-payments.component';
import { GalleryComponent } from './ui-elements/gallery/gallery.component';
import { WCardComponent } from './widgets/w-card/w-card.component';
import { WStaticsComponent } from './widgets/w-statics/w-statics.component';
import { WDataComponent } from './widgets/w-data/w-data.component';
import { WSocialComponent } from './widgets/w-social/w-social.component';
import { WOtherComponent } from './widgets/w-other/w-other.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { BranchComponent } from './branch/branch.component';


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
    path: 'hr',
    component: HRMSComponent,
    data: { title: ':: Time Trax :: Home' }
  },
  {
    path: 'hr-dashboard',
    component: HrDashboardComponent,
    data: { title: ':: Time Trax :: Home' }
  },
  {
    path: 'hr-users',
    component: HrUsersComponent,
    data: { title: ':: Time Trax :: HR Users' }
  },
  {
    path: 'hr-departments',
    component: HrDepartmentsComponent,
    data: { title: ':: Time Trax :: HR Departments' }
  },
  {
    path: 'hr-employee',
    component: HrEmployeeComponent,
    data: { title: ':: Time Trax :: HR Employee' }
  },
  {
    path: 'hr-activities',
    component: HrActivitiesComponent,
    data: { title: ':: Time Trax :: HR Activities' }
  },
  {
    path: 'hr-holidays',
    component: HrHolidaysComponent,
    data: { title: ':: Time Trax :: HR Holidays' }
  },
  {
    path: 'hr-events',
    component: HrEventsComponent,
    data: { title: ':: Time Trax :: HR Events' }
  },
  {
    path: 'hr-payroll',
    component: HrPayrollComponent,
    data: { title: ':: Time Trax :: HR Payroll' }
  },
  {
    path: 'hr-accounts',
    component: HrAccountsComponent,
    data: { title: ':: Time Trax :: HR Accounts' }
  },
  {
    path: 'hr-reports',
    component: HrReportComponent,
    data: { title: ':: Time Trax :: HR Report' }
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
    path: 'project',
    component: ProjectComponent,
    data: { title: ':: Time Trax :: Project' }
  },
  {
    path: 'project-deashboard',
    component: PrDashboardComponent,
    data: { title: ':: Time Trax :: Project Dashboard' }
  },
  {
    path: 'project-list',
    component: PrProjectlistComponent,
    data: { title: ':: Time Trax :: Project List' }
  },
  {
    path: 'project-taskboard',
    component: PrTaskboardComponent,
    data: { title: ':: Time Trax :: Project Taskboard' }
  },
  {
    path: 'project-ticketlist',
    component: PrTicketlistComponent,
    data: { title: ':: Time Trax :: Project Ticketlist' }
  },
  {
    path: 'project-ticketdetails',
    component: PrTicketdetailsComponent,
    data: { title: ':: Time Trax :: Project Ticketdetails' }
  },
  {
    path: 'project-clients',
    component: PrClientsComponent,
    data: { title: ':: Time Trax :: Project Clients' }
  },
  {
    path: 'project-todo-list',
    component: PrTodolistComponent,
    data: { title: ':: Time Trax :: Project Todolist' }
  },
  {
    path: 'jobportal',
    component: JobPortalComponent,
    data: { title: ':: Time Trax :: JobPortal' }
  },
  {
    path: 'jobportal-job-dashboard',
    component: JobportalDashboardComponent,
    data: { title: ':: Time Trax :: JobPortal Dashboard' }
  },
  {
    path: 'jobportal-positions',
    component: JobportalPositionsComponent,
    data: { title: ':: Time Trax :: JobPortal Positions' }
  },
  {
    path: 'jobportal-applicants',
    component: JobportalApplicantsComponent,
    data: { title: ':: Time Trax :: JobPortal Applicants' }
  },
  {
    path: 'jobportal-resumes',
    component: JobportalResumesComponent,
    data: { title: ':: Time Trax :: JobPortal Resumes' }
  },
  {
    path: 'jobportal-settings',
    component: JobportalSettingsComponent,
    data: { title: ':: Time Trax :: JobPortal Settings' }
  },
  {
    path: 'icon-fontawesome',
    component: IconFontawesomeComponent,
    data: { title: ':: Time Trax :: Icon Fontawesome' }
  },
  {
    path: 'icon-feather',
    component: IconFeatherComponent,
    data: { title: ':: Time Trax :: Icon Feather' }
  },
  {
    path: 'icon-lines',
    component: IconLinesComponent,
    data: { title: ':: Time Trax :: Icon Lines' }
  },
  {
    path: 'icon-flags',
    component: IconFlagsComponent,
    data: { title: ':: Time Trax :: Icon Flags' }
  },
  {
    path: 'icon-payments',
    component: IconPaymentsComponent,
    data: { title: ':: Time Trax :: Icon Payments' }
  },
  {
    path: 'table',
    component: TablesComponent,
    data: { title: ':: Time Trax :: Tables' }
  },
  {
    path: 'map',
    component: MapsComponent,
    data: { title: ':: Time Trax :: Maps' }
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    data: { title: ':: Time Trax :: Gallery' }
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