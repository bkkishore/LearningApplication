import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.css']
})
export class NewLoginComponent implements OnInit {

  NewLoginForm = new FormGroup({
    userFirstName: new FormControl(),
    userPassword: new FormControl(),
    confirmationPassword: new FormControl(),

  })


  constructor() { }
 

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.NewLoginForm.value.userFirstName);
    console.log(this.NewLoginForm.value.userPassword);
   }

}
