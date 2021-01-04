import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { text } from '@fortawesome/fontawesome-svg-core';
import { ToastrService } from 'ngx-toastr';
import { tinyInit } from 'src/app/config/editor/tiny-editor';
import { CommentRequest } from 'src/app/payloads/comment-request.payload';
import { CommentService } from 'src/app/services/comment.service';
import { AuthStorageService } from 'src/app/services/storage/auth-storage.service';
import { PostModel } from 'src/app/shared/post-model';

@Component({
  selector: 'app-comment-post',
  templateUrl: './comment-post.component.html',
  styleUrls: ['./comment-post.component.css']
})
export class CommentPostComponent implements OnInit {

  @Input() post: PostModel;
  username: string;
  readonly initEditor = tinyInit;
  commentForm: FormGroup;
  createCommentPayload: CommentRequest;

  constructor(private commentService:CommentService, private authStorageService:AuthStorageService, private toastrService:ToastrService) { 
    this.username = authStorageService.getUsername();
    
  }

  ngOnInit(): void {
       this.initCommentForm();
  }

  initCommentForm(): void{
      this.commentForm = new FormGroup({
           text: new FormControl('', Validators.required)
      })
  }

  createComment(){
   
       console.log(this.post)

       this.createCommentPayload = {
        text: this.commentForm.get('text').value,
        postId: this.post.postId,
        userId: this.post.userId
      }


       this.commentService.createComment(this.createCommentPayload).subscribe(isValid => {
              console.log("comment created");
       },error =>{
              this.toastrService.error("Error trying to create comment "+error);
       },
              () => console.log("Create comment request executed")
       );
  }

}
