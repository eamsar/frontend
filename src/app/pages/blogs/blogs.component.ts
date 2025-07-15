import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
  imports: [CommonModule, NavbarComponent,FooterComponent]
})
export class BlogsComponent {
blogPosts = [
      {
        id: 1,
        title: 'Transformation Digitale 2025',
        summary: 'Découvrez comment nous accompagnons nos clients vers une transformation numérique réussie.',
        imageUrl: 'https://source.unsplash.com/400x250/?tech',
        link: '#'
      },
      {
        id: 2,
        title: 'Notre Participation au Forum SAP',
        summary: 'Retour sur notre présence au dernier forum SAP et nos innovations présentées.',
        imageUrl: 'https://source.unsplash.com/400x250/?conference',
        link: '#'
      },
      {
        id: 3,
        title: 'Talents & Recrutement',
        summary: 'Nous recrutons des talents passionnés pour rejoindre notre aventure.',
        imageUrl: 'https://source.unsplash.com/400x250/?teamwork',
        link: '#'
      }
    ];
}
