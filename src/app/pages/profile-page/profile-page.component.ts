import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-page',
  imports: [CommonModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent {
  user = {
    name: 'John Doe',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    bio: 'Passionate about organizing and attending community events. Love connecting with like-minded people and exploring new interests. Always excited to learn and grow with the community.',
    email: 'john.doe@example.com',
    location: 'San Francisco, CA',
    memberSince: new Date('2023-03-15'),
    eventsAttended: 24,
    followers: 156,
    following: 89,
    boardGames: ['Bomb Busters', 'Splendor', 'Ticket to Ride', 'Avalon', 'Nana', 'Flip 7']
  };
}
