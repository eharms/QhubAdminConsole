import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsearchComponent } from './recordsearch.component';

describe('RecordsearchComponent', () => {
  let component: RecordsearchComponent;
  let fixture: ComponentFixture<RecordsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
