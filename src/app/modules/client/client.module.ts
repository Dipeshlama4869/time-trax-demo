import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSliderModule } from '@angular/material/slider';
import { NgApexchartsModule } from "ng-apexcharts";
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid';
import { AgmCoreModule } from '@agm/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CkeditorComponent } from './ckeditor/ckeditor.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CountToModule } from 'angular-count-to';
import { FooterComponent } from './footer/footer.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { FileUploadComponent } from './attendance/file-upload/file-upload.component';
import { DateInputComponent } from './_forms/date-input/date-input.component';
import { TextInputComponent } from './_forms/text-input/text-input.component';
import { BranchComponent } from './branch/branch.component';
import { AddComponent } from './branch/add/add.component';
import { UpdateComponent } from './branch/update/update.component';
import { ResultComponent } from './branch/result/result.component';
import { ClassComponent } from './class/class.component';
import { AddClassComponent } from './class/add-class/add-class.component';
import { UpdateClassComponent } from './class/update-class/update-class.component';
import { ResultClassComponent } from './class/result-class/result-class.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ModeComponent } from './mode/mode.component';
import { StatusComponent } from './status/status.component';
import { GradeComponent } from './grade/grade.component';
import { HolidayComponent } from './holiday/holiday.component';
import { AddGradeComponent } from './grade/add-grade/add-grade.component';
import { EditGradeComponent } from './grade/edit-grade/edit-grade.component';
import { AddHolidayComponent } from './holiday/add-holiday/add-holiday.component';
import { EditHolidayComponent } from './holiday/edit-holiday/edit-holiday.component';
import { AddModeComponent } from './mode/add-mode/add-mode.component';
import { EditModeComponent } from './mode/edit-mode/edit-mode.component';
import { AddStatusComponent } from './status/add-status/add-status.component';
import { EditStatusComponent } from './status/edit-status/edit-status.component';
import { GradeTypeComponent } from './grade-type/grade-type.component';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AddGradeTypeComponent } from './grade-type/add-grade-type/add-grade-type.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin
]);

@NgModule({
  imports: [
    MatDialogModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    CarouselModule.forRoot(),
    DragDropModule,
    MatSliderModule,
    NgApexchartsModule,
    NgMultiSelectDropDownModule.forRoot(),
    CountToModule,
    ToastrModule.forRoot({
    }),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    AgmCoreModule.forRoot({
      apiKey: 'GOOGLE_API_KEY'
    }),
    FullCalendarModule,
    CKEditorModule,
  ],
  exports: [
  ],
  declarations: [
    ClientRoutingModule.components,
    HeaderComponent,
    LeftmenuComponent,
    CkeditorComponent,
    FooterComponent,
    AttendanceComponent,
    FileUploadComponent,
    DateInputComponent,
    TextInputComponent,
    BranchComponent,
    AddComponent,
    UpdateComponent,
    ResultComponent,
    ClassComponent,
    AddClassComponent,
    UpdateClassComponent,
    ResultClassComponent,
    ModeComponent,
    StatusComponent,
    GradeComponent,
    HolidayComponent,
    AddGradeComponent,
    EditGradeComponent,
    AddHolidayComponent,
    EditHolidayComponent,
    AddModeComponent,
    EditModeComponent,
    AddStatusComponent,
    EditStatusComponent,
    GradeTypeComponent,
    ConfirmDialogComponent,
    AddGradeTypeComponent,
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    BsDatepickerModule
  ]
})
export class ClientModule { }