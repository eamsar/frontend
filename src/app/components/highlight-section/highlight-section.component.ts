import { Component} from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService, Blog } from '../../shared/services/blogservice.service';
@Component({
  selector: 'app-highlight-section',
  templateUrl: './highlight-section.component.html',
  styleUrls: ['./highlight-section.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class HighlightSectionComponent   {
  activeCardIndex: number | null = null;
  currentIndex = 0;
  itemsPerPage = 4;
  intervalId: any;
  hoveredIndex=0;

   articles: Blog[] = [];
 constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getLatestBlogs().subscribe(data => {
      this.articles = data;
    });
     this.intervalId = window.setInterval(() => {
      this.hoveredIndex = (this.hoveredIndex + 1) % this.itemsPerPage;console.log('Hovered index:', this.hoveredIndex);
    }, 3000);
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
      // Si on arrive à la fin, on boucle
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
