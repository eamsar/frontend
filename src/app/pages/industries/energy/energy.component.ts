import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { ContactFormComponent } from "../../../components/contact-form/contact-form.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-energy',
  imports: [NavbarComponent, ContactFormComponent, FooterComponent,CommonModule],
  templateUrl: './energy.component.html',
  styleUrl: './energy.component.css'
})
export class EnergyComponent {
  currentPath: string | undefined;
  ngOnInit(): void {
    this.currentPath = window.location.pathname;
  }

  isActive(path: string): boolean {
    return this.currentPath === path;
  }
   testimonials = [
    {
      name: 'Omar Fkeyrat',
      title: 'Director Division Manager',
      company: 'Algotechnica',
      message: 'A good address for all those who need an advisor who has been familiar with insurance processes for a few days longer and doesn’t just claim to be.'
    },
    {
      name: 'Sanae sanae',
      title: 'Healthcare Manager',
      company: 'MediCareTech',
      message: 'The healthcare solutions we implemented with their guidance were efficient, scalable, and reliable.'
    },
    {
      name: 'Marc Dubois',
      title: 'Automotive Lead Engineer',
      company: 'AutoNext',
      message: 'Working with them helped us digitize our operations and achieve outstanding performance.'
    }
  ];

  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }
}
