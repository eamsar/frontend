import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {interval} from 'rxjs';
import { PLATFORM_ID, Inject } from '@angular/core';
import { ServicesService,Service } from '../../shared/services/services.service';
@Component({
  selector: 'app-service-compt',
  templateUrl: './service-compt.component.html',
  styleUrls: ['./service-compt.component.css'],
  imports:[CommonModule]
})
export class ServiceComptComponent {
  services : Service[] = [];

  currentIndex = 0;
  counter = 0;
  private intervalId!: number;
 constructor(private Serv: ServicesService,@Inject(PLATFORM_ID) private platformId: Object){}
  ngOnInit(): void {
    this.Serv.getServices().subscribe(data=>{
      this.services = data;
    });
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
  if (total === 0) {
    return [];
  }
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
