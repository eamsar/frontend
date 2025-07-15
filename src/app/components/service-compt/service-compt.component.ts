import { Component ,OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-service-compt',
  templateUrl: './service-compt.component.html',
  styleUrl: './service-compt.component.css',
  imports: [CommonModule]
})
export class ServiceComptComponent implements OnInit {
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
  currentIndex = 0;
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
 ngOnInit(): void {
    setInterval(() => {
      this.next();
    }, 3000); // Changer toutes les 3s
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
