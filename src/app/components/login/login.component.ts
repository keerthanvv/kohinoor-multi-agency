import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   user = new User();
  constructor(private _loginService:LoginService){}

  ngOnInit(): void {
  }
onSubmit(){
  console.log("form submited");
  this._loginService.loginUser(this.user).subscribe(
    data => {console.log("responce recived")
    if(data.emailId ==this.user.emailId && data.password==this.user.password){
      console.log("equls");

    }
  },
    error => {console.log("exception occured")
  Swal.fire("you have entered wrong email or password")

  }

  )

  }
}

