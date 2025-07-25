import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ContactFormComponent } from "../../components/contact-form/contact-form.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { ServicesService, Service } from '../../shared/services/services.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-allservices',
  standalone: true,
  imports: [NavbarComponent, ContactFormComponent, FooterComponent, CommonModule,RouterModule],
  templateUrl: './allservices.component.html',
  styleUrl: './allservices.component.css'
})
export class AllservicesComponent {
  showContactForm = false;

toggleContactForm() {
  this.showContactForm = !this.showContactForm;
}
  currentPath: string | undefined;
  services: Service[] = [];
  activeService?: Service;

  constructor(private Serv: ServicesService, private router: Router) {}

  ngOnInit(): void {
    this.currentPath = this.router.url; // ✅ SAFE ! Pas de window
    console.log('Current path:', this.currentPath);

    this.Serv.getServices().subscribe(data => {
      this.services = data;

      // ✅ Faire le find SEULEMENT APRÈS avoir reçu les données
            const currentPath = this.router.url;
      this.activeService = this.services.find(s => s.link === currentPath);

            if (typeof this.activeService?.sections === 'string') {
        try {
          this.activeService.sections = JSON.parse(this.activeService.sections);
        } catch (error) {
          console.error('Invalid JSON in sections:', error);
          this.activeService.sections = [];
        }
      }
    
    });
  }

  isActive(path: string): boolean {
    return this.currentPath === path;
  }
}
