import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ChatbotComponent } from "./chatbot/chatbot.component";

@Component({
  selector: 'app-root',
  standalone: true, // ✅ This is required
  imports: [RouterOutlet, RouterModule, HttpClientModule, ChatbotComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // ✅ should be "styleUrls", not "styleUrl"
})
export class AppComponent {
  title = 'web-frontend';


}
