import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
interface Message {
  from: 'user' | 'bot';
  text: string;
}

@Component({
  selector: 'app-chatbot',
  imports: [FormsModule,CommonModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})

export class ChatbotComponent implements AfterViewChecked {
  isOpen = false;
  userInput = '';
  messages: Message[] = [
    { from: 'bot', text: 'Hello! Welcome to AtlionTech SAP consulting. How can I assist you today?' }
  ];

  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (!this.userInput.trim()) return;

    // Add user message
    this.messages.push({ from: 'user', text: this.userInput.trim() });

    // Simulate bot response (replace with real API calls!)
    setTimeout(() => {
      this.messages.push({
        from: 'bot',
        text: this.getBotResponse(this.userInput.trim())
      });
      this.scrollToBottom();
    }, 800);

    this.userInput = '';
    this.scrollToBottom();
  }

  // Simple example bot response (replace with API call for real chatbot)
  getBotResponse(userText: string): string {
    const text = userText.toLowerCase();

    if (text.includes('hello') || text.includes('hi')) {
      return 'Hi there! How can we help with your SAP needs?';
    } else if (text.includes('pricing')) {
      return 'Our SAP consulting pricing depends on the project scope. Please share details.';
    } else if (text.includes('services')) {
      return 'We provide SAP consulting, implementation, support, and training services.';
    } else if (text.includes('contact')) {
      return 'You can reach us at contact@atliontech.com or call +212 00 0000 00.';
    }
    return 'Thanks for reaching out! Can you please provide more details?';
  }

  // Scroll chat to bottom when new message arrives
  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch {}
  }
}