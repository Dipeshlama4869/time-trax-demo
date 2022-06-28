import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { ChatComponent } from './chat/chat.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { FormElementComponent } from './form-element/form-element.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSliderModule } from '@angular/material/slider';
import { ChartsComponent } from './charts/charts.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { ColumnChartComponent } from './charts/column-chart/column-chart.component';
import { AreaChartComponent } from './charts/area-chart/area-chart.component';
import { RadarChartComponent } from './charts/radar-chart/radar-chart.component';
import { RadialbarChartComponent } from './charts/radialbar-chart/radialbar-chart.component';
import { HeatmapChartComponent } from './charts/heatmap-chart/heatmap-chart.component';
import { CandlestickChartComponent } from './charts/candlestick-chart/candlestick-chart.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { CalenderComponent } from './calender/calender.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ContactsComponent } from './contacts/contacts.component';
import { FilemanagerComponent } from './filemanager/filemanager.component';
import { SparklinesComponent } from './charts/sparklines/sparklines.component';
import { SettingsComponent } from './settings/settings.component';
import { MinbarchartComponent } from './charts/minbarchart/minbarchart.component';
import { FullcalenderComponent } from './fullcalender/fullcalender.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid';
import { WorldmapComponent } from './worldmap/worldmap.component';
import { AgmCoreModule } from '@agm/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CkeditorComponent } from './ckeditor/ckeditor.component';
import { MapsComponent } from './maps/maps.component';
import { SearchComponent } from './search/search.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BasicradarChartComponent } from './charts/basicradar-chart/basicradar-chart.component';
import { ColumnLineChartComponent } from './charts/column-line-chart/column-line-chart.component';
import { WCardComponent } from './widgets/w-card/w-card.component';
import { WStaticsComponent } from './widgets/w-statics/w-statics.component';
import { WDataComponent } from './widgets/w-data/w-data.component';
import { WSocialComponent } from './widgets/w-social/w-social.component';
import { WOtherComponent } from './widgets/w-other/w-other.component';
import { ProfileComponent } from './profile/profile.component';
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
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin
]);

@NgModule({
  imports: [
    CommonModule,
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
    CKEditorModule
  ],
  declarations: [
    ClientRoutingModule.components,
    HeaderComponent,
    LeftmenuComponent,
    ChatComponent,
    FormElementComponent,
    ChartsComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    ColumnChartComponent,
    AreaChartComponent,
    RadarChartComponent,
    RadialbarChartComponent,
    HeatmapChartComponent,
    CandlestickChartComponent,
    WidgetsComponent,
    CalenderComponent,
    ContactsComponent,
    FilemanagerComponent,
    SparklinesComponent,
    SettingsComponent,
    MinbarchartComponent,
    FullcalenderComponent,
    WorldmapComponent,
    CkeditorComponent,
    MapsComponent,
    SearchComponent,
    BasicradarChartComponent,
    ColumnLineChartComponent,
    WCardComponent,
    WStaticsComponent,
    WDataComponent,
    WSocialComponent,
    WOtherComponent,
    ProfileComponent,
    FooterComponent,
    AttendanceComponent,
    FileUploadComponent,
    DateInputComponent,
    TextInputComponent,
    BranchComponent,
    AddComponent,
    UpdateComponent,
  ],
  providers: [BsDatepickerModule]
})
export class ClientModule { }