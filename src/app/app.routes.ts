import { Routes } from '@angular/router';
import { EventForumComponent } from './pages/event-forum/event-forum.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { LoginPageComponent } from './pages/login-page.component/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page.component/sign-up-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/event-page', pathMatch: 'full' },
  { path: 'event-page', component: EventForumComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'sign-up', component: SignUpPageComponent },

];
