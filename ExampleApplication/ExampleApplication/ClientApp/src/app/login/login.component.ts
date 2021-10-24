import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
//import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userNameModel: any='';
  userPasswordModel: any='';
  loginError:any=false;

  constructor(private route: Router, private httpService:HttpClient) { }

  ngOnInit() {
    this.loginError = false;
  }

  SignupUser()
  {
    this.route.navigate(['/signup']);
  }

  ValidateUser()
  {      
    let userRecord = {};

      userRecord['userId'] = this.userNameModel;
      userRecord['userPassword'] = this.userPasswordModel;    

      const headersForAPI = new HttpHeaders();
      headersForAPI.append('Content-Type', 'application/json');
      headersForAPI.append('Accept', 'application/json');

      this.httpService.post('https://localhost:44372/api/User/ValidateUserProfile',userRecord, {headers: headersForAPI}).subscribe((res:any) => {
     
      console.log(res);      
      // this.userRecordsFromAPI = res;
      this.route.navigate(['/home']);

    },
    error =>{
       console.log('Invalid user credentials');
       this.loginError = true;
    });      
  }

}
