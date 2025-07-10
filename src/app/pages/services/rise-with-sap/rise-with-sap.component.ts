import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { ContactFormComponent } from '../../../components/contact-form/contact-form.component';
@Component({
  standalone:true,
  selector: 'app-rise-with-sap',
  imports: [NavbarComponent,FooterComponent,ContactFormComponent],
  templateUrl: './rise-with-sap.component.html',
  styleUrl: './rise-with-sap.component.css'
})
export class RiseWithSAPComponent {

}
