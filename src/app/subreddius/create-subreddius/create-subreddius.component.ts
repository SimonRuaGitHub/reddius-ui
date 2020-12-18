import { prepareSyntheticListenerFunctionName } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { AuthStorageService } from 'src/app/services/storage/auth-storage.service';
import { SubreddiusService } from 'src/app/services/subreddius.service';
import { SubreddiusModel } from 'src/app/shared/subreddius-model';

@Component({
  selector: 'app-create-subreddius',
  templateUrl: './create-subreddius.component.html',
  styleUrls: ['./create-subreddius.component.css']
})
export class CreateSubreddiusComponent implements OnInit {

  subreddiusForm: FormGroup;
  

  constructor(private subreddiusService:SubreddiusService,private authStorage:AuthStorageService, private toastr:ToastrService) { }

  ngOnInit(): void {
   this.subreddiusForm = new FormGroup({
                name: new FormControl('', Validators.required),
                description: new FormControl('',Validators.required)
   })
  }

  createSubreddius(){
    let subreddiusModel:SubreddiusModel = {
        subreddiusName: this.subreddiusForm.get('name').value,
        description: this.subreddiusForm.get('description').value,
        username: this.authStorage.getUsername()
    };

    console.log(subreddiusModel);

    this.subreddiusService.createSubreddius(subreddiusModel).subscribe(subreddiusCreated => {
             this.toastr.success('Community '+subreddiusCreated.subreddiusName+' was created successfully');
    },error =>{
             this.toastr.success(`There was error trying to create your community`);
    }, () => {
              console.log("requested executed");
    }
    )
  }

}
