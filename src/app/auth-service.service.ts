import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

 
  isLoggedIn() {

    var localStorageData = localStorage.getItem('user:'); // get token from local 
    console.log("got token from servioce class");
    if(localStorageData!=null){
      return true;

    }else{return false;}
    
  }
  removeFromLocalStorage(){
    localStorage.removeItem('user:');
  }

  }
