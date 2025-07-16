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
   all:Blog[]=[];
 
filterType: 'all' | 'blog' | 'news' = 'all';
 constructor(private blogService: BlogService) {}
  ngOnInit(): void {
    this.blogService.getLatestBlogs().subscribe(data => {
      this.blogPosts = data;
      this.all=data;

    });
  }

filterBlogs(type: string) {
  console.log("Filter called with type:", type);
  if (type === 'all') {
    this.blogPosts = this.all;
  } else if (type=='blog'){
    console.log("this.allBlogs");
    console.log(this.blogPosts[0].type);
    this.blogPosts =  this.all.filter(b => b.type === 'blogs');
    
  }
  else{
this.blogPosts =  this.all.filter(b => b.type === 'news');
  }
}

}
