import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { PostModel } from 'src/app/shared/post-model';

@Component({
  selector: 'app-post-title',
  templateUrl: './post-title.component.html',
  styleUrls: ['./post-title.component.css']
})
export class PostTitleComponent implements OnInit {

  listPosts:Array<PostModel> = [];

  constructor(private postService:PostService) { 
  }

  ngOnInit(): void {
      this.postService.getAllPosts().subscribe(posts => {
        this.listPosts = posts;
        console.log(this.listPosts);
   })
  }

}
