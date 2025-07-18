import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {interval} from 'rxjs';
import { PLATFORM_ID, Inject } from '@angular/core';
@Component({
  selector: 'app-service-compt',
  templateUrl: './service-compt.component.html',
  styleUrls: ['./service-compt.component.css'],
  imports:[CommonModule]
})
export class ServiceComptComponent {
  services = [

    {
      title: 'SAP S/4HANA',
      description: `SAP S/4HANA Cloud est un progiciel de gestion intégré (ERP) complet, doté de technologies intelligentes intégrées...`,
      icon: 'assets/servicesimages/images4hana.png' // ← change to your actual image path
    },
    {
      title: 'TMA',
      description: `Avec notre offre TMA, vous bénéficiez d’une assistance sur mesure, avec un choix selon votre besoin et votre budget`,
      icon: 'assets/servicesimages/tma.png'
    },
    {
      title: 'AMOA',
      description: `Nos consultants couvrent tous les domaines fonctionnels liés au fonctionnement interne des entreprises....`,
      icon: 'assets/servicesimages/amoase.png'
    },  {
      title: 'Grow with SAP',
      description: `SAP S/4HANA Cloud est un progiciel de gestion intégré (ERP) complet, doté de technologies intelligentes intégrées...`,
      icon: 'assets/servicesimages/gwsap.png' // 
    },
    {
      title: 'Data Analytics $ AI',
      description: `Avec notre offre TMA, vous bénéficiez d’une assistance sur mesure, avec un choix selon votre besoin et votre budget`,
      icon: 'assets/servicesimages/dai.png'
    },
    {
      title: 'Customer Experiences',
      description: `Nos consultants couvrent tous les domaines fonctionnels liés au fonctionnement interne des entreprises....`,
      icon: 'assets/servicesimages/custemerexp.png'
    }

  ];

  currentIndex = 0;
  counter = 0;
  private intervalId!: number;
 constructor(@Inject(PLATFORM_ID) private platformId: Object){}
  ngOnInit(): void {
    if (typeof window !== 'undefined') {
    // Démarre l'auto-slide toutes les 2 secondes (2000 ms)
      this.intervalId = window.setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.services.length;
    }, 5000);

  }}

  ngOnDestroy(): void {
    // Nettoie le timer pour éviter fuite mémoire
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  get visibleServices() {
    const total = this.services.length;
    const prevIndex = (this.currentIndex - 1 + total) % total;
    const nextIndex = (this.currentIndex + 1) % total;
    return [
      this.services[prevIndex],
      this.services[this.currentIndex],
      this.services[nextIndex]
    ];
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.services.length) % this.services.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.services.length;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }
}
