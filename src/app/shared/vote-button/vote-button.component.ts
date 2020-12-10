import { Component, Input, OnInit } from '@angular/core';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { VoteType } from 'src/app/enums/VoteType';
import { PostService } from 'src/app/services/post.service';
import { VoteService } from 'src/app/services/vote.service';
import { PostModel } from '../post-model';
import { VoteModel } from '../vote-model';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.css']
})
export class VoteButtonComponent implements OnInit {

  @Input() post: PostModel;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  private voteModel: VoteModel;
  readonly UPVOTE: VoteType = VoteType.Upvote;
  readonly DOWNVOTE: VoteType = VoteType.Downvote;

  constructor(private voteService:VoteService, private postService:PostService, private toastService:ToastrService) { }

  ngOnInit(): void {
     this.voteModel = {
          userid:this.post.userId,
          postid:this.post.postId,
          voteType: undefined
     }
  }

  vote(voteType: VoteType):void{
    
    this.voteModel.voteType = voteType;

     this.voteService.votePost(this.voteModel).subscribe(() => {
        this.refreshPost();
    }, error => {
       this.toastService.error("There was an error trying to vote on Post");
       throwError(error);
    });
  }

  private refreshPost(){
      this.postService.getPost(this.post.postId).subscribe(post => this.post = post);
  }
}
