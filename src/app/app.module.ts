import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptor } from './token-interceptor';
import { HomeComponent } from './home/home.component';
import { PostTitleComponent } from './home/post-title/post-title.component';
import { VoteButtonComponent } from './shared/vote-button/vote-button.component';
import { SideBarComponent } from './home/side-bar/side-bar.component';
import { SubreddiusSideBarComponent } from './home/subreddius-side-bar/subreddius-side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateSubreddiusComponent } from './subreddius/create-subreddius/create-subreddius.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListSubreddiusesComponent } from './subreddius/list-subreddiuses/list-subreddiuses.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { CommunityRulesComponent } from './shared/community-rules/community-rules.component';
import { CommentPostComponent } from './post/comment-post/comment-post.component';
import { CommentsListComponent } from './post/comments-list/comments-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PostTitleComponent,
    VoteButtonComponent,
    SideBarComponent,
    SubreddiusSideBarComponent,
    CreateSubreddiusComponent,
    ListSubreddiusesComponent,
    CreatePostComponent,
    ViewPostComponent,
    CommunityRulesComponent,
    CommentPostComponent,
    CommentsListComponent,
    UserProfileComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    EditorModule,
    NgbModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
