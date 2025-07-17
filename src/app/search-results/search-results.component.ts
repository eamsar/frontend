import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { ContactFormComponent } from "../components/contact-form/contact-form.component";
import { FooterComponent } from "../components/footer/footer.component";
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  imports: [FormsModule, CommonModule, NavbarComponent, ContactFormComponent, FooterComponent],
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  query = '';
  allItems: any[] = []; // Mocked data from all components
  filteredItems: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.query = (params['q'] || '').toLowerCase();
      this.loadAllContent();
      this.filterResults();
    });
  }

  loadAllContent() {
    // Simulate pulling data from news/services/industries
    this.allItems = [
      { title: 'Data Analytics, Big Data & AI', category: 'Services', content: 'We make data talk...' },
      { title: 'Health Insurance', category: 'Industries', content: 'Insurance services for health' },
      { title: 'SAP BTP', category: 'Solutions', content: 'Platform for development' },
      // ... inject from real services later
    ];
  }

  filterResults() {
    this.filteredItems = this.allItems.filter(item =>
      item.title.toLowerCase().includes(this.query) ||
      item.content.toLowerCase().includes(this.query)
    );
  }
}
