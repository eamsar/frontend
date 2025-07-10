import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HeroBannerComponent } from "../../components/hero-banner/hero-banner.component";
import { HighlightSectionComponent } from "../../components/highlight-section/highlight-section.component";
import { TrustSectionComponent } from "../../components/trust-section/trust-section.component";
import { IndustriesCarouselComponent } from "../../components/industries-carousel/industries-carousel.component";
import { ContactFormComponent } from "../../components/contact-form/contact-form.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ServiceComptComponent } from "../../components/service-compt/service-compt.component";

@Component({
  selector: 'app-home',

  imports: [NavbarComponent, HeroBannerComponent, HighlightSectionComponent, TrustSectionComponent, IndustriesCarouselComponent, ContactFormComponent, FooterComponent,ServiceComptComponent],

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
goToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

}
