import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.css']
})
export class HeroBannerComponent implements OnInit, OnDestroy {
  images: string[] = [
    'assets/home-img/homeimg.png',
    'assets/home-img/home-img2.jpg',
    'assets/home-img/home-img3.jpg'
  ];

  currentIndex = 0;
  intervalId: any;
  isTransitioning = true; // to control CSS transition on jump

  // imagesWithClone adds a clone of first image at the end
  get imagesWithClone() {
    return [...this.images, this.images[0]];
  }

  ngOnInit(): void {
    this.startSlider();
  }

  startSlider() {
    this.intervalId = window.setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextSlide() {
    if (this.currentIndex < this.images.length) {
      this.currentIndex++;
      this.isTransitioning = true;
    }

    // When reached the clone slide, jump to real first slide instantly
    if (this.currentIndex === this.images.length) {
      setTimeout(() => {
        this.isTransitioning = false; // turn off animation for jump
        this.currentIndex = 0;
      }, 1000); // duration must match CSS transition time
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  getTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  getTransition(): string {
    return this.isTransitioning ? 'transform 1s ease-in-out' : 'none';
  }
}
