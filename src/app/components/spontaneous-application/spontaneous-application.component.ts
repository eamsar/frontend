import { Component } from '@angular/core';

@Component({
  selector: 'app-spontaneous-application',
  imports: [],
  templateUrl: './spontaneous-application.component.html',
  styleUrl: './spontaneous-application.component.css'
})
export class SpontaneousApplicationComponent {
onFileSelected(event: any) {
  const file = event.target.files[0];
  console.log('File selected:', file);
}

onSubmit() {
  console.log('Form submitted');
  // Call your backend or service here
}

}
