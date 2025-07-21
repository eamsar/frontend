import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { ContactFormComponent } from "../../../components/contact-form/contact-form.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { CommonModule } from '@angular/common';
//import { HeroBannerComponent } from "../../../components/hero-banner/hero-banner.component";

@Component({
  selector: 'app-customer-experience',
  imports: [NavbarComponent, ContactFormComponent, FooterComponent,CommonModule],
  templateUrl: './customer-experience.component.html',
  styleUrl: './customer-experience.component.css'
})
export class CustomerExperienceComponent {
  currentPath: string | undefined;
  ngOnInit(): void {
    this.currentPath = window.location.pathname;
  }

  isActive(path: string): boolean {
    return this.currentPath === path;
  }
}
