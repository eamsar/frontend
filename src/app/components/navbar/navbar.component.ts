import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [CommonModule,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
showSearch = false;
searchTerm = '';

toggleSearch() {
  this.showSearch = !this.showSearch;
}

constructor(private router: Router) {}


onSearch() {
      console.log('Searching for:', this.searchTerm);
  if (this.searchTerm.trim()) {
    this.router.navigate(['/search'], { queryParams: { q: this.searchTerm.trim() } });
  }
}


}
