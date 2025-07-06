import { Component  } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-service-compt',
  templateUrl: './service-compt.component.html',
  styleUrl: './service-compt.component.css',
  imports: [CommonModule]
})
export class ServiceComptComponent  {
  services = [
    {
      title: 'SAP S/4HANA',
      description: `SAP S/4HANA Cloud est un progiciel de gestion intégré (ERP) complet, doté de technologies intelligentes intégrées...`,
      icon: 'assets/servicesimages/image.png' // ← change to your actual image path
    },
    {
      title: 'TMA',
      description: `Avec notre offre TMA, vous bénéficiez d’une assistance sur mesure, avec un choix selon votre besoin et votre budget`,
      icon: ''
    },
    {
      title: 'AMOA',
      description: `Nos consultants couvrent tous les domaines fonctionnels liés au fonctionnement interne des entreprises....`,
      icon: ''
    },  {
      title: 'Grow with SAP',
      description: `SAP S/4HANA Cloud est un progiciel de gestion intégré (ERP) complet, doté de technologies intelligentes intégrées...`,
      icon: '' // 
    },
    {
      title: 'Data Analytics $ AI',
      description: `Avec notre offre TMA, vous bénéficiez d’une assistance sur mesure, avec un choix selon votre besoin et votre budget`,
      icon: ''
    },
    {
      title: 'Customer Experiences',
      description: `Nos consultants couvrent tous les domaines fonctionnels liés au fonctionnement interne des entreprises....`,
      icon: ''
    }
  ];
    activeCardIndex: number | null = null;
  currentIndex = 0;
  intervalId: any;
   get visibleArticles() {
    const start = this.currentIndex;
    const end = (start )  % this.services.length;

    if (end > start) {
      return this.services.slice(start, end);
    } else {
      // Si on arrive à la fin, on boucle
      return [
        ...this.services.slice(start),
        ...this.services.slice(0, end)
      ];
    }
  }
    // Méthode pour activer le hover
  setActiveCard(index: number) {
    this.activeCardIndex = index;
  }

  // Renvoie les articles visibles (circulaire)


  // Affiche les articles suivants
  goTo(index: number) {
    this.currentIndex = index;
  }


  next() {
    this.currentIndex = (this.currentIndex + 1) % this.services.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.services.length) % this.services.length;
  }

}
