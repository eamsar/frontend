import { Component } from '@angular/core';
import { ResumeService } from '../../shared/services/resume.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-spontaneous-application',
  templateUrl: './spontaneous-application.component.html',
  styleUrls: ['./spontaneous-application.component.css'],
  imports:[FormsModule]
})
export class SpontaneousApplicationComponent {
  fullName = '';
  email = '';
  about = '';
  selectedFile!: File;

  constructor(private resumeService: ResumeService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log('File selected:', this.selectedFile);
  }

  onSubmit() {
    if (!this.selectedFile) {
      console.error('Please select a file.');
      return;
    }

    this.resumeService.sendResume({
      fullName: this.fullName,
      email: this.email,
      file: this.selectedFile,
      about: this.about
    }).subscribe({
      next: res => console.log('Resume uploaded!', res),
      error: err => console.error('Upload failed', err)
    });
  }
}
