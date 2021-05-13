import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { PostModel } from '../shared/post-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listPosts:Array<PostModel> = [];
  private readonly initPage = 0;
  private paginator:number;

  constructor(private postService:PostService) { 
    console.log('Loading post titles');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

      console.log("scrolling");

      let scrollOffset = window.pageYOffset;
      console.log("Document scroll top: "+document.documentElement.scrollTop);
      console.log("Scroll offset: ",scrollOffset);
      console.log("Body scroll top: ",document.body.scrollTop);
      console.log("Scroll Height: ", document.documentElement.clientHeight);

      if(scrollOffset > document.documentElement.clientHeight*0.75){
         console.log("Paginator: ",this.paginator++)
         this.searchAllPostsByPage(this.paginator);
      }
  } 

  ngOnInit(): void {
          this.searchAllPostsByPage(this.initPage);
          this.paginator = this.initPage;
  }


  private searchAllPostsByPage(page:number){
    this.postService.getAllPostsByPage(page).subscribe((page:any) => {

      if(page.numberOfElements >= 0){
        if(page.number == this.initPage){
           this.listPosts = page.content;
        }else{
           this.listPosts = this.listPosts.concat(page.content);
        }
      }

      console.log(this.listPosts);
   })
  }

}
