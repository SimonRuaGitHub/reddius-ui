import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { CreateSubreddiusComponent } from './subreddius/create-subreddius/create-subreddius.component';
import { ListSubreddiusesComponent } from './subreddius/list-subreddiuses/list-subreddiuses.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path:'', component: HomeComponent },
  {path:'view-post/:id', component: ViewPostComponent},
  {path:'all-subreddiuses', component: ListSubreddiusesComponent},
  {path:'create-subreddius', component: CreateSubreddiusComponent, canActivate:[AuthGuard]},
  {path:'create-post', component: CreatePostComponent, canActivate:[AuthGuard]},
  {path:"sign-up", component: SignupComponent},
  {path:"login", component: LoginComponent},
  {path:"user/:username", component: UserProfileComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
