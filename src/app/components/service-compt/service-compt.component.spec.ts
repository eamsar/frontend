import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceComptComponent } from './service-compt.component';

describe('ServiceComptComponent', () => {
  let component: ServiceComptComponent;
  let fixture: ComponentFixture<ServiceComptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceComptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceComptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
