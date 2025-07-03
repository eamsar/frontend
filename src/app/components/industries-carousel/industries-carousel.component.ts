import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-industries-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './industries-carousel.component.html',
  styleUrls: ['./industries-carousel.component.css']
})
export class IndustriesCarouselComponent implements AfterViewInit {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  industries = [
    { name: 'Insurance', imageUrl: 'assets/insurance.webp' },
    { name: 'Industry', imageUrl: 'assets/images/industry.jpg' },
    { name: 'Health', imageUrl: 'assets/images/health.jpg' },
    { name: 'Banking', imageUrl: 'assets/images/banking.jpg' },
    { name: 'Retail', imageUrl: 'assets/images/retail.jpg' }
  ];

  activeIndex = 0;
  dots: number[] = [];

  ngAfterViewInit() {
    const groupSize = 3;
    this.dots = Array(Math.ceil(this.industries.length / groupSize)).fill(0);
    this.carousel.nativeElement.addEventListener('scroll', () => this.onScroll());
  }

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -270 * 3, behavior: 'smooth' });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({ left: 270 * 3, behavior: 'smooth' });
  }

  onScroll() {
    const scrollLeft = this.carousel.nativeElement.scrollLeft;
    const groupWidth = 270 * 3 + 16 * 2; // card width x 3 + gap x 2
    this.activeIndex = Math.round(scrollLeft / groupWidth);
  }
}
