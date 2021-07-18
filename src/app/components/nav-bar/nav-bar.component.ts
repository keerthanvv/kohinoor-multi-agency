import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public authgard:AuthServiceService) {
   }

  ngOnInit(): void {
    
  }
  isLoggedIn(){
    return this.authgard.isLoggedIn();
  }

  logOut(){
    this.authgard.removeFromLocalStorage();
  }
}

