import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventService } from '../services/event.service';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-event-forum',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './event-forum.component.html',
  styleUrls: ['./event-forum.component.css'],
})
export class EventForumComponent implements OnInit {
  events: Event[] = [];
  showForm = false;
  formData = {
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    author: '',
  };

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((events) => {
      this.events = events;
    });
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.resetForm();
    }
  }

  submitEvent(): void {
    if (this.isFormValid()) {
      this.eventService.addEvent(this.formData);
      this.resetForm();
      this.showForm = false;
    }
  }

  deleteEvent(id: number): void {
    if (confirm('Are you sure you want to delete this event?')) {
      this.eventService.deleteEvent(id);
    }
  }

  resetForm(): void {
    this.formData = {
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      author: '',
    };
  }

  isFormValid(): boolean {
    return (
      this.formData.title.trim() !== '' &&
      this.formData.description.trim() !== '' &&
      this.formData.date !== '' &&
      this.formData.time !== '' &&
      this.formData.location.trim() !== '' &&
      this.formData.author.trim() !== ''
    );
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}
