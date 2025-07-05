import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpontaneousApplicationComponent } from './spontaneous-application.component';

describe('SpontaneousApplicationComponent', () => {
  let component: SpontaneousApplicationComponent;
  let fixture: ComponentFixture<SpontaneousApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpontaneousApplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpontaneousApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
