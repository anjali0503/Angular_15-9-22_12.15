import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetApprovedJobsComponent } from './get-approved-jobs.component';

describe('GetApprovedJobsComponent', () => {
  let component: GetApprovedJobsComponent;
  let fixture: ComponentFixture<GetApprovedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetApprovedJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetApprovedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
