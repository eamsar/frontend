import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { JobFilterComponent } from "../../components/job-filter/job-filter.component";
import { SpontaneousApplicationComponent } from "../../components/spontaneous-application/spontaneous-application.component";
import { ContactFormComponent } from "../../components/contact-form/contact-form.component";

@Component({
  selector: 'app-career',
  imports: [NavbarComponent, FooterComponent, JobFilterComponent, SpontaneousApplicationComponent, ContactFormComponent],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {
@ViewChild('testimonialContainer', { static: false }) testimonialContainer!: ElementRef;

  scrollTestimonials(direction: 'left' | 'right') {
    const container = this.testimonialContainer.nativeElement;
    const scrollAmount = 350;

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
}
