
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-industries-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './industries-carousel.component.html',
  styleUrls: ['./industries-carousel.component.css']
})
export class IndustriesCarouselComponent {
  industries = [
    {
      name: 'Insurance',
      imageUrl: 'assets/insurance.webp',
      description: 'We help insurers optimize claim processes, improve compliance, and embrace digital transformation.'
    },
    {
      name: 'Industry',
      imageUrl: 'assets/industry.jpg',
      description: 'We support industrial clients in modernizing production using SAP S/4HANA and automation solutions.'
    },
    {
      name: 'Health',
      imageUrl: 'assets/health.jpg',
      description: 'Enhancing healthcare delivery through data integration, regulatory compliance, and digital care paths.'
    },
    {
      name: 'Banking',
      imageUrl: 'assets/banking.jpg',
      description: 'Drive innovation in banking with real-time analytics, risk management, and SAP Financial Services.'
    },
    {
      name: 'Retail',
      imageUrl: 'assets/retail.jpg',
      description: 'Enable personalized shopping and agile supply chains with SAP Retail & CX solutions.'
    }
  ];


  activeIndex = 0;
  dots: number[] = [];
 constructor(private cdr : ChangeDetectorRef){}
  ngAfterViewInit() {
    const groupSize = 3;
    this.dots = Array(Math.ceil(this.industries.length / groupSize)).fill(0);
    this.carousel.nativeElement.addEventListener('scroll', () => this.onScroll());
  }

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -270 * 3, behavior: 'smooth' });
  }

  activeIndustry = this.industries[0];
 fadeTrigger = true;


setActiveIndustry(index: number) {
  this.activeIndustry = this.industries[index];

  // reset fade effect
  this.fadeTrigger = false;
  setTimeout(() => {
    this.fadeTrigger = true;
  }, 10); // small delay to retrigger fade
}}
