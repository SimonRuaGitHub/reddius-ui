import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { find, take } from 'rxjs/operators';
import { SubreddiusService } from 'src/app/services/subreddius.service';
import { SubreddiusModel } from 'src/app/shared/subreddius-model';

@Component({
  selector: 'app-subreddius-side-bar',
  templateUrl: './subreddius-side-bar.component.html',
  styleUrls: ['./subreddius-side-bar.component.css','../shared/styles/side-bar.css']
})
export class SubreddiusSideBarComponent implements OnInit {

  subreddiuses: Array<SubreddiusModel>;
  private readonly maxReddiusesToShow:number = 5;
  isViewMoreVisible:boolean=false;

  constructor(private subreddiusService:SubreddiusService, private router:Router) { }

  ngOnInit(): void {
    this.subreddiusService.getAllSubreddius().subscribe(arraySubreddiuses => {

      if(arraySubreddiuses.length <= this.maxReddiusesToShow){
         this.isViewMoreVisible = false;
         this.subreddiuses = arraySubreddiuses;
      }else{
        this.isViewMoreVisible = true;
        this.subreddiuses = arraySubreddiuses.slice(0,this.maxReddiusesToShow);
      }
    
    });
  }

  goToSubreddiusesList(){
       this.router.navigateByUrl('/all-subreddiuses');
  }

}
