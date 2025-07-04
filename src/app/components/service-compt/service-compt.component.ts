import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-service-compt',
  templateUrl: './service-compt.component.html',
  styleUrl: './service-compt.component.css',
  imports: [CommonModule]
})
export class ServiceComptComponent {
  services = [
    {
      title: 'SAP S/4HANA',
      description: `SAP S/4HANA Cloud est un progiciel de gestion intégré (ERP) complet, doté de technologies intelligentes intégrées...`,
      icon: '' // ← change to your actual image path
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
}
