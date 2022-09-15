import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetApplicantsComponent } from './get-applicants.component';

describe('GetApplicantsComponent', () => {
  let component: GetApplicantsComponent;
  let fixture: ComponentFixture<GetApplicantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetApplicantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
