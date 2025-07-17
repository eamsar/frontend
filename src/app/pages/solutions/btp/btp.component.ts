import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { ContactFormComponent } from '../../../components/contact-form/contact-form.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-btp',
  imports: [NavbarComponent,FooterComponent,ContactFormComponent,CommonModule],
  templateUrl: './btp.component.html',
  styleUrl: './btp.component.css'
})
export class BTPComponent {
currentPath: string | undefined;
  ngOnInit(): void {
    this.currentPath = window.location.pathname;
  }

  isActive(path: string): boolean {
    return this.currentPath === path;
  }

}
