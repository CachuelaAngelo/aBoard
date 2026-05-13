import { Routes } from '@angular/router';
import { EventForumComponent } from './event-forum/event-forum.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/event-page', pathMatch: 'full' },
  { path: 'event-page', component: EventForumComponent },
  { path: 'profile', component: ProfilePageComponent },
];
