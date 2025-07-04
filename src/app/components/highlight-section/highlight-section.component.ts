import { Component} from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  articles = [
    {
      title: 'SAP Service Partner.It’s a recognition we’re proud of, especially as a young company. ',
      author: 'Atliontech NEWS',
      date: 'Jun 28, 2025',
      image: 'assets/partner.png'
    },
    {
      title: 'Six AI-Accelerated, Proactive, and Preventative Methods Transforming SAP’s Customer Support',
      author: 'Stefan Sterne',
      date: 'May 8, 2025',
      image: 'assets/onpvcloud.png'
    },
    {
      title: 'SAP Named a Leader in 2025 Gartner® Magic Quadrant™ for Warehouse Management Systems',
      author: 'Till Dengel',
      date: 'May 9, 2025',
      image: 'assets/article3.jpg'
    },{
      title: 'VFS Global Leverages SAP Software to Power Digital Cross-Border Mobility',
      author: 'SAP NEWS',
      date: 'May 2, 2025',
      image: 'assets/article1.jpg'
    },
    {
      title: 'Six AI-Accelerated, Proactive, and Preventative Methods Transforming SAP’s Customer Support',
      author: 'Stefan Sterne',
      date: 'May 8, 2025',
      image: 'assets/article2.jpg'
    },
    {
      title: 'SAP Named a Leader in 2025 Gartner® Magic Quadrant™ for Warehouse Management Systems',
      author: 'Till Dengel',
      date: 'May 9, 2025',
      image: 'assets/article3.jpg'
    }
  ];

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
