import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Needed for ngModel
import { JobService, Job } from '../../shared/services/job.service';

@Component({
  selector: 'app-job-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './job-filter.component.html',
  styleUrls: ['./job-filter.component.css']
})
export class JobFilterComponent implements OnInit {
  jobs: Job[] = [];
  filteredJobs: Job[] = [];

  titleFilter = '';
  locationFilter = '';
  departmentFilter = '';

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(data => {
      this.jobs = data;
      this.filteredJobs = data; // show all initially
    });
  }

  applyFilter(): void {
    this.filteredJobs = this.jobs.filter(job =>
      (this.titleFilter === '' || job.title.toLowerCase().includes(this.titleFilter.toLowerCase())) &&
      (this.locationFilter === '' || job.location === this.locationFilter) &&
      (this.departmentFilter === '' || job.department === this.departmentFilter)
    );
  }
  redirectToLinkedIn() {
  window.open('https://www.linkedin.com/company/atliontech/', '_blank');
}

}
