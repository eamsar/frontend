import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { BlogService, Blog } from '../../shared/services/blogservice.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
  imports: [CommonModule, NavbarComponent,FooterComponent,FormsModule]
})
export class BlogsComponent {
  blogPosts: Blog[] = [];
filterType: 'all' | 'blog' | 'news' = 'all';
 constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getAllBlogs().subscribe(data => {
      this.blogPosts = data;
    });
  }



}
