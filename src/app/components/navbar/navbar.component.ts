import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true,
  imports: [CommonModule,FormsModule],
})
export class NavbarComponent {
isScrolled = false;
searchTerm = "" ;
constructor(private router: Router) {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }
    showSearch = false;

 toggleSearch() {
  this.showSearch = !this.showSearch;
}

closeSearch() {
  this.showSearch = false;
}


  onSearch() {
      console.log('Searching for:', this.searchTerm);
  if (this.searchTerm.trim()) {
   this.router.navigate(['/api/search'], { queryParams: { keyword: this.searchTerm } });

 
  }
}
}
