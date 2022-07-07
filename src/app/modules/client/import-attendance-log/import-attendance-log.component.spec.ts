import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportAttendanceLogComponent } from './import-attendance-log.component';

describe('ImportAttendanceLogComponent', () => {
  let component: ImportAttendanceLogComponent;
  let fixture: ComponentFixture<ImportAttendanceLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportAttendanceLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportAttendanceLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
