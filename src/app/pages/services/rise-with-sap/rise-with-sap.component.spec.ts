import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiseWithSAPComponent } from './rise-with-sap.component';

describe('RiseWithSAPComponent', () => {
  let component: RiseWithSAPComponent;
  let fixture: ComponentFixture<RiseWithSAPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiseWithSAPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiseWithSAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
