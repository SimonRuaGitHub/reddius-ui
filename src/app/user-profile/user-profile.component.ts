import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostService } from '../services/post.service';
import { PostModel } from '../shared/post-model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private username$:string;
  listPosts: Array<PostModel> = [];

  constructor(private postService:PostService, private activateRoute:ActivatedRoute, private toastrService:ToastrService) { 
             this.username$ = this.activateRoute.snapshot.params.username;
             console.log(this.username$);
  }

  ngOnInit(): void {
          this.postService.getAllPostsByUser(this.username$)
                          .subscribe(posts => this.listPosts = posts,
                                     error => this.toastrService.error(error));
 
  }

}
