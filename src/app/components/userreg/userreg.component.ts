import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent implements OnInit {
  credentials={
    username:'',
    password:'',
    confirmpassword:''

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


