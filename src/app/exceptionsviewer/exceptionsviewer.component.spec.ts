import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionsviewerComponent } from './exceptionsviewer.component';

describe('ExceptionsviewerComponent', () => {
  let component: ExceptionsviewerComponent;
  let fixture: ComponentFixture<ExceptionsviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExceptionsviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceptionsviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
