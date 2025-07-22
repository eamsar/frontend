import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../shared/services/contact.service';
@Component({
  selector: 'app-contact-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  showPrivacyModal: boolean = false;
validationMessage: string | null = null;
  isContactVisible = false;

  toggleContact() {
    this.isContactVisible = !this.isContactVisible;
  }
  openPrivacyModal() {
    this.showPrivacyModal = true;
  }

  closePrivacyModal() {
    this.showPrivacyModal = false;
  }
  constructor(private contactService: ContactService) {}
   onSubmit() {
    const salutation = (document.querySelector('input[name="salutation"]:checked') as HTMLInputElement)?.nextSibling?.textContent?.trim() || '';
    const company = (document.querySelector('input[placeholder="Company"]') as HTMLInputElement)?.value || '';
    const phoneNumber = (document.querySelector('input[placeholder="Phone number"]') as HTMLInputElement)?.value || '';
    const firstName = (document.querySelector('input[placeholder="First name *"]') as HTMLInputElement)?.value || '';
    const lastName = (document.querySelector('input[placeholder="Last name *"]') as HTMLInputElement)?.value || '';
    const email = (document.querySelector('input[placeholder="E-mail *"]') as HTMLInputElement)?.value || '';
    const message = (document.querySelector('textarea[placeholder="Your message *"]') as HTMLTextAreaElement)?.value || '';
     const checkbox = document.querySelector('#agree') as HTMLInputElement;
  const agreed = checkbox?.checked;

   if (!agreed) {
    this.validationMessage = 'You must agree to the privacy policy.';
    this.clearValidationMessageAfterDelay();
    return;
  }

  if (!firstName || !lastName || !email || !message) {
    this.validationMessage = 'Please fill in all required fields.';
    this.clearValidationMessageAfterDelay();
    return;
  }
this.validationMessage = null;
    const contact = {
      salutation,
      company,
      phoneNumber,
      firstName,
      lastName,
      email,
      message
    };
  this.contactService.sendContact(contact).subscribe({
   next: res => {
      this.toastMessage = 'Your message has been sent successfully!';
      this.clearForm();
      // Hide toast after 3 seconds
      setTimeout(() => this.toastMessage = null, 3000);
    },
    error: err => {
      console.error('Error:', err);
      this.toastMessage = 'Failed to send your message. Please try again.';
      // Hide toast after 3 seconds
      setTimeout(() => this.toastMessage = null, 3000);
    }
  });
}
toastMessage: string | null = null;

clearValidationMessageAfterDelay() {
  setTimeout(() => {
    this.validationMessage = null;
  }, 4000);  // clears after 4 seconds
}
clearForm() {
  const inputs = document.querySelectorAll('.contact-form input');
  inputs.forEach(input => {
    if ((input as HTMLInputElement).type === 'radio' || (input as HTMLInputElement).type === 'checkbox') {
      (input as HTMLInputElement).checked = false;
    } else {
      (input as HTMLInputElement).value = '';
    }
  }); 
   const textarea = document.querySelector('.contact-form textarea') as HTMLTextAreaElement;
  if (textarea) textarea.value = '';
}}