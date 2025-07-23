import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { ContactFormComponent } from "../components/contact-form/contact-form.component";
import { FooterComponent } from "../components/footer/footer.component";
import { SearchService } from '../shared/services/search.service';
import { ActivatedRoute } from '@angular/router';

interface SearchResult {
  industries: any[];
  jobs: any[];
  services: any[];
}

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  imports: [FormsModule, CommonModule, NavbarComponent, ContactFormComponent, FooterComponent],
  standalone: true,  // add this if your component is standalone
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  query = '';
  filteredResults: SearchResult | null = null;
  loading = false;

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Read the query param 'q' from URL and perform search
    this.route.queryParams.subscribe(params => {
      const q = params['keyword'] || '';

      if (q) {
        this.query = q;
        this.filterResults();
      }
    });
  }

  filterResults() {
    if (!this.query.trim()) return;

    this.loading = true;
    this.searchService.search(this.query).subscribe({
      next: (results) => {
        this.filteredResults = results;
        this.loading = false;
      },
      error: (err) => {
        console.error('Search error:', err);
        this.filteredResults = null;
        this.loading = false;
      },
    });
  }

  hasAnyResults(): boolean {
  return (
    (this.filteredResults?.industries?.length || 0) +
    (this.filteredResults?.jobs?.length || 0) +
    (this.filteredResults?.services?.length || 0) > 0
  );
}

totalResults(): number {
  return (
    (this.filteredResults?.industries?.length || 0) +
    (this.filteredResults?.jobs?.length || 0) +
    (this.filteredResults?.services?.length || 0)
  );
}

}
