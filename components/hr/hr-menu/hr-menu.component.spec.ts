import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrMenuComponent } from './hr-menu.component';

describe('HrMenuComponent', () => {
  let component: HrMenuComponent;
  let fixture: ComponentFixture<HrMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
