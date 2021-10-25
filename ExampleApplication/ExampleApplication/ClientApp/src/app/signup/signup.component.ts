import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitDisabled:boolean=true;
  onKeyUpConfirmPassword:any;
  userId:string='';
  userFirstName:string = '';
  userLastName:string = '';
  DateOfBirth:any;
  CommunicationAddress:string='';
  emailId:string='';
  MobileNumber:any;
  interests:string='';
  Password:string='';
  userProfiles:any=[];
  actionButtonName:string='';
  constructor(private route: Router) {

   }

  ngOnInit() 
  {
  }
  AddUser()
  {
    this.route.navigate(['/login']);
  }
}



















































// const headersForAPI = new HttpHeaders();
    // headersForAPI.append('Content-Type', 'application/json');
    // headersForAPI.append('Accept', 'application/json');

    // this.httpService.post('http://localhost:44391/api/Sample/AddUsers',UserProfile, {headers: headersForAPI}).subscribe((res:any[]) => {
    // console.log(res);
    // this.userRecordsFromAPI = res;

// function userRecord(arg0: string, userRecord: any, arg2: { headers: HttpHeaders; }) {
//   throw new Error('Function not implemented.');
//ng build
 //  onkeyupConfirmPassword(){
    
  // if( this.userId !='' && this.userFirstName != '' && this.userLastName != ''
  // && this.userDateOfBirth != '' && this.userCommunicationAddress !='' && this.useremailId !='' && this.userMobileNumber > 0 &&
  // this.userinterests != '')
  // {
  //   this.submitDisabled = false;
  // }
  // else
  // {
  //   this.submitDisabled = true;
  // }
  // }