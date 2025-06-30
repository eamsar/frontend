import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-highlight-section',
  templateUrl: './highlight-section.component.html',
  styleUrls: ['./highlight-section.component.css'],
  imports: [CommonModule],
})
export class HighlightSectionComponent {
  activeCardIndex: number | null = null;

setActiveCard(index: number) {
  this.activeCardIndex = index;
}
  currentIndex = 0;
  itemsPerPage = 4;
  articles = [
    {
      title: 'SAP Service Partner.It’s a recognition we’re proud of, especially as a young company. It shows what’s possible when a team puts in the effort to learn, grow, and stay committed to quality. It also reflects SAP’s trust in our work and strengthens our credibility in the ecosystem.',
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

  // Aller à l'article précédent
   get visibleArticles() {
    return this.articles.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
  }

  next() {
    if (this.currentIndex < this.articles.length) {
      this.currentIndex += 1;
    }
  }

  prev() {
    if (this.currentIndex >= 0) {
      this.currentIndex -= 1;
    }
  }

  // Aller directement à un index donné
  goTo(index: number) {
    this.currentIndex = index;
  }
}
