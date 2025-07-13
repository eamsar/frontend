import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { ContactFormComponent } from "../../../components/contact-form/contact-form.component";
import { FooterComponent } from "../../../components/footer/footer.component";

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-data-analytics',
  imports: [NavbarComponent, ContactFormComponent, FooterComponent,CommonModule],
  templateUrl: './data-analytics.component.html',
  styleUrl: './data-analytics.component.css'
})
export class DataAnalyticsComponent {
  currentPath: string | undefined;
  ngOnInit(): void {
    this.currentPath = window.location.pathname;
  }

  isActive(path: string): boolean {
    return this.currentPath === path;
  }

}
