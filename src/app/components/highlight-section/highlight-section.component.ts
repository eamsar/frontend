import { Component} from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService, Blog } from '../../shared/services/blogservice.service';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
//import { SwiperModule } from 'swiper/angular';
@Component({
  selector: 'app-highlight-section',
  templateUrl: './highlight-section.component.html',
  styleUrls: ['./highlight-section.component.css'],
  imports : [CommonModule]
})
export class HighlightSectionComponent   {
  activeCardIndex: number | null = null;
  currentIndex = 0;
  itemsPerPage = 3;
  intervalId: any;
  hoveredIndex=0;
  isMobile = false;
   articles: Blog[] = [];
 constructor(private blogService: BlogService,@Inject(PLATFORM_ID) private platformId: Object) {}
  ngOnInit(): void {
    this.blogService.getLatestBlogs().subscribe(data => {
      this.articles = data;
    });
          this.isMobile = window.innerWidth <= 768;

  window.addEventListener('resize', () => {
    this.isMobile = window.innerWidth <= 768;
    this.itemsPerPage = this.isMobile ? 1 : 3;
  });

  this.itemsPerPage = this.isMobile ? 1 : 3;
  if (typeof window !== 'undefined') {
     this.intervalId = window.setInterval(() => {
      
    }, 1000);}
   

  }
  

  // Méthode pour activer le hover
  setActiveCard(index: number) {
    this.activeCardIndex = index;
  }
  

  // Renvoie les articles visibles (circulaire)
get visibleArticles() {
  const start = this.currentIndex;
  const end = (start + this.itemsPerPage) % this.articles.length;

  if (end > start) {
    return this.articles.slice(start, end);
  } else {
    return [
      ...this.articles.slice(start),
      ...this.articles.slice(0, end)
    ];
  }
}

  // Affiche les articles suivants
  goTo(index: number) {
    this.currentIndex = index;
  }


  next() {
    this.currentIndex = (this.currentIndex + 1) % this.articles.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.articles.length) % this.articles.length;
  }





}
