import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviwerMenuComponent } from './interviwer-menu.component';

describe('InterviwerMenuComponent', () => {
  let component: InterviwerMenuComponent;
  let fixture: ComponentFixture<InterviwerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviwerMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviwerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
