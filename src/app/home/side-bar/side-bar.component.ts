import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css',
              '../shared/styles/side-bar.css']
})
export class SideBarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToCreatePost(){
      this.router.navigateByUrl("/create-post");
  }

  goToCreateSubreddius(){
      this.router.navigateByUrl("/create-subreddius");
  }

}
