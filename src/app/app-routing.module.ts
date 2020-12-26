import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { CreateSubreddiusComponent } from './subreddius/create-subreddius/create-subreddius.component';
import { ListSubreddiusesComponent } from './subreddius/list-subreddiuses/list-subreddiuses.component';

const routes: Routes = [
  {path:'', component: HomeComponent },
  {path:'all-subreddiuses', component: ListSubreddiusesComponent},
  {path:'create-subreddius', component: CreateSubreddiusComponent},
  {path:'create-post', component: CreatePostComponent},
  {path:"sign-up", component: SignupComponent},
  {path:"login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
