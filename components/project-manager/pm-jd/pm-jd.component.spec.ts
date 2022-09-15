import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmJdComponent } from './pm-jd.component';

describe('PmJdComponent', () => {
  let component: PmJdComponent;
  let fixture: ComponentFixture<PmJdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmJdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmJdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
