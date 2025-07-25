import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ContactFormComponent } from "../../components/contact-form/contact-form.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CommonModule } from '@angular/common';
import {IndustryServiceService , Industry } from '../../shared/services/industry-service.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-industry',
  imports: [NavbarComponent, ContactFormComponent, FooterComponent, CommonModule,RouterModule],
  templateUrl: './industry.component.html',
  styleUrl: './industry.component.css'
})
export class IndustryComponent {
 currentPath: string | undefined;
  industries: Industry[] = [];
  activeIndustry?: Industry;

  constructor(private ind: IndustryServiceService, private router: Router) {}

  ngOnInit(): void {
    this.currentPath = this.router.url; // ✅ SAFE ! Pas de window
    console.log('Current path:', this.currentPath);

    this.ind.getIndustries().subscribe(data => {
      this.industries = data;

      // ✅ Faire le find SEULEMENT APRÈS avoir reçu les données
            const currentPath = this.router.url;
      this.activeIndustry = this.industries.find(s => s.link === currentPath);

          /*  if (typeof this.activeIndustry?. === 'string') {
        try {
          this.activeService.sections = JSON.parse(this.activeService.sections);
        } catch (error) {
          console.error('Invalid JSON in sections:', error);
          this.activeService.sections = [];
        }
      }*/
    
    });
  }

  isActive(path: string): boolean {
    return this.currentPath === path;
  }
}
