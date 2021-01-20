import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { PostModel } from 'src/app/shared/post-model';

@Component({
  selector: 'app-post-title',
  templateUrl: './post-title.component.html',
  styleUrls: ['./post-title.component.css']
})
export class PostTitleComponent implements OnInit {

  @Input() listPosts:Array<PostModel> = [];

  constructor(private postService:PostService, private router:Router) {}

  ngOnInit(): void {}

  public goToPost(id: number): void{
       this.router.navigateByUrl('/view-post/'+id);
  }

}
