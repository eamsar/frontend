import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERPComponent } from './erp.component';

describe('ERPComponent', () => {
  let component: ERPComponent;
  let fixture: ComponentFixture<ERPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ERPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ERPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
