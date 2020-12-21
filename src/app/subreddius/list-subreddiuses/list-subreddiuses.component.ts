import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SubreddiusService } from 'src/app/services/subreddius.service';
import { SubreddiusModel } from 'src/app/shared/subreddius-model';

@Component({
  selector: 'app-list-subreddiuses',
  templateUrl: './list-subreddiuses.component.html',
  styleUrls: ['./list-subreddiuses.component.css']
})
export class ListSubreddiusesComponent implements OnInit {

  subreddiuses:Array<SubreddiusModel>;

  constructor(private subreddiusesService:SubreddiusService, private toastr:ToastrService) { }

  ngOnInit(): void {

    this.subreddiusesService.getAllSubreddius().subscribe(arraySubreddiuses => {
         this.subreddiuses = arraySubreddiuses;
         console.log(this.subreddiuses);
    },error => {
      this.toastr.error('Error trying to search all subreddiuses');
      console.error(error);
    },() => {
      console.log("Request executed");
    })
  }

}
