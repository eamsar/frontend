
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndustryServiceService,Industry } from '../../shared/services/industry-service.service';
import { PLATFORM_ID, Inject } from '@angular/core';
@Component({
  selector: 'app-industries-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './industries-carousel.component.html',
  styleUrls: ['./industries-carousel.component.css']
})
export class IndustriesCarouselComponent {
  industries:Industry[] =[]

  activeIndex = 0;
 constructor(private ind: IndustryServiceService, @Inject(PLATFORM_ID) private platformId: Object){}
  ngOnInit(): void {
    this.ind.getIndustries().subscribe(data=>{
      this.industries = data;
    });

  };
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
/* [
    {
      name: 'Insurance',
      imageUrl: 'assets/test.png',
      description: 'We help insurers optimize claim processes, improve compliance, and embrace digital transformation.',
      icon:  'assets/insurance.png'
    },
    {
      name: 'Industry',
      imageUrl: 'assets/industry.webp',
      description: 'We support industrial clients in modernizing production using SAP S/4HANA and automation solutions.',
      icon:  'assets/industry.png'
    },
    // {
    //   name: 'Health',
    //   imageUrl: 'assets/health.webp',
    //   description: 'Enhancing healthcare delivery through data integration, regulatory compliance, and digital care paths.',
    //   icon:  'assets/health.png'
    // },
    {
      name: 'Banking',
      imageUrl: 'assets/banking.png',
      description: 'Drive innovation in banking with real-time analytics, risk management, and SAP Financial Services.',
      icon:  'assets/bank.png'
    },
    // {
    //   name: 'Retail',
    //   imageUrl: 'assets/retail.webp',
    //   description: 'Enable personalized shopping and agile supply chains with SAP Retail & CX solutions.',
    //   icon:  'assets/retail.png'
    // }
  ];
*/