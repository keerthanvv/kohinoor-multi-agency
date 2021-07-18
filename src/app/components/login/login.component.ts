import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   user = new User();
  constructor(private _loginService:LoginService,public _router:Router){}

  ngOnInit(): void {
  }
onSubmit(){
  console.log("form submited");
  this._loginService.loginUser(this.user).subscribe(
    data => {console.log("responce recived")
    if(data.emailId ==this.user.emailId && data.password==this.user.password){
      console.log("login sucessfull");
      localStorage.setItem("user:",JSON.stringify(data));
      var localStorageData  =  JSON.parse(localStorage.getItem("user:") || '{}');
      console.log(localStorageData);
      this._router.navigate(['/dashboard']);

    }
  },
    error => {console.log("exception occured")
  Swal.fire("you have entered wrong email or passwor")

  }

  )

  }
}

