import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    username:'',
    password:''
  }

  constructor() { }

  ngOnInit(): void {
  }
onSubmit(){
  console.log("form submited");
  if((this.credentials.username!='' && this.credentials.password!='') && (this.credentials.username!=null &&this.credentials.password!=null)){    
  }else{
    console.log("wrong creds");
    Swal.fire('Any of the Login fields can not be empty.Please try again!!')
  }
}
}
