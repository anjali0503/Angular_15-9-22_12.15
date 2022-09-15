import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviwerHomeComponent } from './interviwer-home.component';

describe('InterviwerHomeComponent', () => {
  let component: InterviwerHomeComponent;
  let fixture: ComponentFixture<InterviwerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviwerHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviwerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
