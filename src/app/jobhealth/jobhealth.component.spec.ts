import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobhealthComponent } from './jobhealth.component';

describe('JobhealthComponent', () => {
  let component: JobhealthComponent;
  let fixture: ComponentFixture<JobhealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobhealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobhealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
