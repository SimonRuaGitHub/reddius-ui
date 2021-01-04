import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import { PostModel } from 'src/app/shared/post-model';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  postId: number;
  post$: PostModel;

  constructor(private postService:PostService, private activateRoute:ActivatedRoute) { 
     this.postId = this.activateRoute.snapshot.params.id;
  }

  ngOnInit(): void {
     this.postService.getPost(this.postId).subscribe(post => this.post$ = post, 
                                                     error  => throwError(error), 
                                                    () => console.log("request to getPost executed"))
  }

}
