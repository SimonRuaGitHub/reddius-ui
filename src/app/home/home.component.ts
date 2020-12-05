import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { PostModel } from '../shared/post-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listPosts:Array<PostModel>;

  constructor(private postService:PostService) { }

  ngOnInit(): void {
      this.postService.getAllPosts().subscribe(posts => {
        this.listPosts = posts;
        console.log(this.listPosts);
   })
  }

}
