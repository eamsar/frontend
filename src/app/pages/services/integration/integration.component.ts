import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { CommonModule } from '@angular/common';

import { FooterComponent } from '../../../components/footer/footer.component';
import { ContactFormComponent } from '../../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-integration',
  imports: [NavbarComponent,CommonModule,FooterComponent,ContactFormComponent],
  templateUrl: './integration.component.html',
  styleUrl: './integration.component.css'
})
export class IntegrationComponent {
 currentPath: string | undefined;
  ngOnInit(): void {
    this.currentPath = window.location.pathname;
  }

  isActive(path: string): boolean {
    return this.currentPath === path;
  }

}
