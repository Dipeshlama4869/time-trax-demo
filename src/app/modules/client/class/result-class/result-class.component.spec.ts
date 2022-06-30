import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultClassComponent } from './result-class.component';

describe('ResultClassComponent', () => {
  let component: ResultClassComponent;
  let fixture: ComponentFixture<ResultClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
