import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AuthGuard } from './guard/auth.guard';
import { ChangePasswordPageComponent } from './pages/change-password-page/change-password-page.component';
import { ChangePicPageComponent } from './pages/change-pic-page/change-pic-page.component';
import { ProfilesPageComponent } from './pages/profiles-page/profiles-page.component';
import { SingleProfilePageComponent } from './pages/single-profile-page/single-profile-page.component';
import { WritingPageComponent } from './pages/writing-page/writing-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'home', component: HomepageComponent, canActivate: [AuthGuard] },
  {
    path: 'update_password',
    component: ChangePasswordPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update_pic',
    component: ChangePicPageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'users', component: ProfilesPageComponent, canActivate: [AuthGuard] },
  {
    path: 'user/:name',
    component: SingleProfilePageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'tweet', component: WritingPageComponent, canActivate: [AuthGuard] },
  {
    path: 'tweet/:tweetID/comment',
    component: WritingPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'tweet/:tweetID',
    component: EditPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'comment/:commentID',
    component: EditPageComponent,
    canActivate: [AuthGuard],
  },
];
