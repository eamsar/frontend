
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowWithSAPComponent } from './grow-with-sap.component';

describe('RiseWithSAPComponent', () => {
  let component: GrowWithSAPComponent;
  let fixture: ComponentFixture<GrowWithSAPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrowWithSAPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrowWithSAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});




