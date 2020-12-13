import { Component, OnInit } from '@angular/core';
import { SubreddiusService } from 'src/app/services/subreddius.service';
import { SubreddiusModel } from 'src/app/shared/subreddius-model';

@Component({
  selector: 'app-subreddius-side-bar',
  templateUrl: './subreddius-side-bar.component.html',
  styleUrls: ['./subreddius-side-bar.component.css','../shared/styles/side-bar.css']
})
export class SubreddiusSideBarComponent implements OnInit {

  subreddiuses: Array<SubreddiusModel>;

  constructor(private subreddiusService:SubreddiusService) { }

  ngOnInit(): void {
    this.subreddiusService.getAllSubreddius().subscribe(arraySubreddiuses => this.subreddiuses = arraySubreddiuses);
  }

}
