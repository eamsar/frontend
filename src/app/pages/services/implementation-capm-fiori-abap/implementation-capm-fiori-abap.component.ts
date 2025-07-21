import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { ContactFormComponent } from "../../../components/contact-form/contact-form.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-implementation-capm-fiori-abap',
  imports: [NavbarComponent, ContactFormComponent, FooterComponent,CommonModule],
  templateUrl: './implementation-capm-fiori-abap.component.html',
  styleUrl: './implementation-capm-fiori-abap.component.css'
})
export class ImplementationCAPMFIORIABAPComponent {
  currentPath: string | undefined;
  ngOnInit(): void {
    this.currentPath = window.location.pathname;
  }

  isActive(path: string): boolean {
    return this.currentPath === path;
  }
}
