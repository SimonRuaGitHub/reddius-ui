import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import { PostModel } from 'src/app/shared/post-model';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { AuthStorageService } from 'src/app/services/storage/auth-storage.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  postId: number;
  post$: PostModel;
  username: string;
  readonly faCommentAlt = faCommentAlt;
  isLoggedIn:boolean;

  constructor(private postService:PostService, private activateRoute:ActivatedRoute, private authService:AuthService) { 
     this.postId = this.activateRoute.snapshot.params.id;
  }

  ngOnInit(): void {
     this.postService.getPost(this.postId).subscribe(post => this.post$ = post, 
                                                     error  => throwError(error), 
                                                    () => console.log("request to getPost executed"));
      this.isLoggedIn = this.authService.isLoggedIn();                                               
  }

}
