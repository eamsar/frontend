import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroBannerComponent } from './hero-banner.component';
import { CommonModule } from '@angular/common';

describe('HeroBannerComponent', () => {
  let component: HeroBannerComponent;
  let fixture: ComponentFixture<HeroBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroBannerComponent],
      imports: [CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
