import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { ContactFormComponent } from '../../../components/contact-form/contact-form.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  selector: 'app-rise-with-sap',
  imports: [NavbarComponent,FooterComponent,ContactFormComponent,CommonModule],
  templateUrl: './rise-with-sap.component.html',
  styleUrl: './rise-with-sap.component.css'
})
export class RiseWithSAPComponent {
currentPath: string | undefined;
  ngOnInit(): void {
    this.currentPath = window.location.pathname;
  }

  isActive(path: string): boolean {
    return this.currentPath === path;
  }

}
