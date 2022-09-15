import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmMenuComponent } from './pm-menu.component';

describe('PmMenuComponent', () => {
  let component: PmMenuComponent;
  let fixture: ComponentFixture<PmMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
