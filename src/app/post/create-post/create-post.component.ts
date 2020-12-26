import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PostRequest } from 'src/app/payloads/post-request-payload';
import { PostService } from 'src/app/services/post.service';
import { AuthStorageService } from 'src/app/services/storage/auth-storage.service';
import { SubreddiusService } from 'src/app/services/subreddius.service';
import { SubreddiusModel } from 'src/app/shared/subreddius-model';
import { tinyInit } from '../../config/editor/tiny-editor';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  initEditor;
  subreddiuses:Array<SubreddiusModel>;
  postForm:FormGroup;
  private createPostPayload:PostRequest;

  constructor(private subreddiusService:SubreddiusService, private authStorageService:AuthStorageService, private postService:PostService, private toastService: ToastrService) { 
     this.initEditor = tinyInit;
  }

  ngOnInit(){
   this.populateSubreddiusesList();
   this.initPostForm();
  }

  private populateSubreddiusesList(){

          this.subreddiusService.getAllSubreddius().subscribe(arraySubreddiuses => {
            this.subreddiuses = arraySubreddiuses;
           }, error => {
            console.error(error);
           }, () => {
            console.log("Request call executed")
           })

  }

  private initPostForm(){
        
          this.postForm = new FormGroup({
               title: new FormControl('', Validators.required),
               url: new FormControl(''),
               community: new FormControl('Select a Community',[Validators.required]),
               description: new FormControl('',Validators.required)
          });

          
  }

  createPost(){

      this.createPostPayload = {
        description: this.postForm.get('description').value,
        postName: this.postForm.get('title').value,
        subreddiusid: this.postForm.get('community').value,
        url: this.postForm.get("url").value,
        userId: this.authStorageService.getUserId()
      }

      this.postService.savePost(this.createPostPayload)
                      .subscribe(isCreated => this.toastService.success("Post was created successfully"), 
                                 error => this.toastService.error("There was a problem trying to create your Post :C"),
                                 () => console.log("Request call completed"));
  }

}
