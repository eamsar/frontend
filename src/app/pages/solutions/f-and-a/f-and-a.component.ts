import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { ContactFormComponent } from '../../../components/contact-form/contact-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-f-and-a',
  imports: [NavbarComponent,FooterComponent,ContactFormComponent,CommonModule],
  templateUrl: './f-and-a.component.html',
  styleUrl: './f-and-a.component.css'
})
export class FAndAComponent {
currentPath: string | undefined;
  ngOnInit(): void {
    this.currentPath = window.location.pathname;
  }

  isActive(path: string): boolean {
    return this.currentPath === path;
  }
}
