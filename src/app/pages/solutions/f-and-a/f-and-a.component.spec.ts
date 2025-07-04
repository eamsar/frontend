import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAndAComponent } from './f-and-a.component';

describe('FAndAComponent', () => {
  let component: FAndAComponent;
  let fixture: ComponentFixture<FAndAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FAndAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FAndAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
