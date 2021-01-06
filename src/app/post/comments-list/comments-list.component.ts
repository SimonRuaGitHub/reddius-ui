import { Component, Input, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { CommentByPost } from 'src/app/payloads/comments-by-post.response';
import { CommentService } from 'src/app/services/comment.service';
import { AddCommentService } from '../shared/add-comment.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  @Input() postid;
  commentsList:Array<CommentByPost>;

  constructor(private commentService:CommentService, private addedCommentService:AddCommentService) { 
    this.addedCommentService.commentAdded.subscribe(message => {
            if(message == this.addedCommentService.commentAddedMessage)
            {
               this.populateCommentList();
            }
    }, error => throwError(error),
    () => console.log("Observer checked if any comment was added"));
  }

  ngOnInit(): void {
     this.populateCommentList();
  }

  populateCommentList(){
        this.commentService.getAllCommentsByPost(this.postid)
        .subscribe(commentsByPost => {
            this.commentsList = commentsByPost;
        },
        error => throwError(error),
        () => console.log("Comment List By Post executed"));
  }

}
