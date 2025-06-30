import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesCarouselComponent } from './industries-carousel.component';

describe('IndustriesCarouselComponent', () => {
  let component: IndustriesCarouselComponent;
  let fixture: ComponentFixture<IndustriesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustriesCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustriesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
