import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedJdComponent } from './published-jd.component';

describe('PublishedJdComponent', () => {
  let component: PublishedJdComponent;
  let fixture: ComponentFixture<PublishedJdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishedJdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishedJdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
