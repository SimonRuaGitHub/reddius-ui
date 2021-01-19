import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faUser = faUser;
  isLoggedIn: boolean;
  username: string;

  constructor(private authService:AuthService, private router:Router) { 
    //When ever user loggin or logout Reddius App
    this.authService.loggedInSource.asObservable().subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
    this.authService.usernameSource.asObservable().subscribe(username => this.username = username);
  }

  ngOnInit() {
     //when page refresh and it doesn't execute any subscribe block instructions, we can check local storage
     this.isLoggedIn = this.authService.isLoggedIn();
     this.username = this.authService.getUsername();
  }

  goToUserProfile(){
       
  }

  logout(){
          this.authService.logout();
  }

}
