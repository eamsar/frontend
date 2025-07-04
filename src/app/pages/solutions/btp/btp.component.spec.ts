import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BTPComponent } from './btp.component';

describe('BTPComponent', () => {
  let component: BTPComponent;
  let fixture: ComponentFixture<BTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BTPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
