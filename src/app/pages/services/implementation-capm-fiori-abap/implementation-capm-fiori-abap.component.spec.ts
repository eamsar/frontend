import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementationCAPMFIORIABAPComponent } from './implementation-capm-fiori-abap.component';

describe('ImplementationCAPMFIORIABAPComponent', () => {
  let component: ImplementationCAPMFIORIABAPComponent;
  let fixture: ComponentFixture<ImplementationCAPMFIORIABAPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImplementationCAPMFIORIABAPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImplementationCAPMFIORIABAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
