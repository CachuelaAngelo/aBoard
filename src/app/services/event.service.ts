import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private events: Event[] = [
    {
      id: 1,
      title: 'Beginner Boardgame Night',
      description: 'New to the Hobby? Join us for a night of fun and games!',
      date: '2026-05-20',
      time: '18:00',
      location: 'Gaming Library Glorietta',
      author: 'John Doe',
      createdAt: new Date('2026-05-10'),
    },
    {
      id: 2,
      title: 'Riftbound Learn and Play',
      description: 'Time to learn how to tame the Rift! Join us for a fun and interactive session of Riftbound.',
      date: '2026-05-25',
      time: '14:00',
      location: 'Hobby Stadium',
      author: 'Earl Bautista',
      createdAt: new Date('2026-05-08'),
    },
  ];

  private eventsSubject = new BehaviorSubject<Event[]>(this.events);
  public events$ = this.eventsSubject.asObservable();

  constructor() {}

  getEvents(): Observable<Event[]> {
    return this.events$;
  }

  addEvent(event: Omit<Event, 'id' | 'createdAt'>): void {
    const newEvent: Event = {
      ...event,
      id: Math.max(...this.events.map((e) => e.id), 0) + 1,
      createdAt: new Date(),
    };
    this.events.push(newEvent);
    this.eventsSubject.next([...this.events]);
  }

  deleteEvent(id: number): void {
    this.events = this.events.filter((e) => e.id !== id);
    this.eventsSubject.next([...this.events]);
  }
}
