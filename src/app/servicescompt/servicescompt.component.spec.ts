import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicescomptComponent } from './servicescompt.component';

describe('ServicescomptComponent', () => {
  let component: ServicescomptComponent;
  let fixture: ComponentFixture<ServicescomptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicescomptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicescomptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
