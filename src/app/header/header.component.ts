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

  }

  ngOnInit() {
      console.log("Getting logged In Info:")
      this.isLoggedIn = this.authService.isLoggedIn();
      this.username = this.authService.getUsername();
  }

  goToUserProfile(){
       
  }

  logout(){
          this.authService.logout();
          this.ngOnInit();
  }

}
