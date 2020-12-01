import { Component } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reddius-ui';

  constructor(private postService:PostService){
      postService.getAllPosts().subscribe(nextdata => console.log(nextdata), error => console.log(error), () => console.log("call process completed"));
  }
}
