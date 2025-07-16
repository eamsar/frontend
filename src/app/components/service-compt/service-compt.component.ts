import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-service-compt',
  templateUrl: './service-compt.component.html',
  styleUrls: ['./service-compt.component.css'],
  imports:[CommonModule]
})
export class ServiceComptComponent {
  services = [
    { title: 'SAP S/4HANA', description: `SAP S/4HANA Cloud ...`, icon: 'assets/servicesimages/image.png' },
    { title: 'TMA', description: `Avec notre offre TMA ...`, icon: '' },
    { title: 'AMOA', description: `Nos consultants couvrent ...`, icon: '' },
    { title: 'Grow with SAP', description: `SAP S/4HANA Cloud ...`, icon: '' },
    { title: 'Data Analytics $ AI', description: `Avec notre offre TMA ...`, icon: '' },
    { title: 'Customer Experiences', description: `Nos consultants couvrent ...`, icon: '' }
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    // Démarre l'auto-slide toutes les 2 secondes (2000 ms)
   
  }

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
