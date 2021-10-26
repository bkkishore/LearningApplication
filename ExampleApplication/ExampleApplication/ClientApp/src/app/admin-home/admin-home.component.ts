import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { send } from 'process';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
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
  UserProfileIndex:number=0;
  loginError:any=false;
  
  constructor( private httpService:HttpClient) { }

  ngOnInit() {
  }

  }
  

  

  



   



















// else
//     {   
//       var existingUserRecord = this.userProfiles[this.UserProfileIndex];

//       let UserProfile  = {};
//       UserProfile[userId] = this.userId;
//       UserProfile[userFirstName] = this.userFirstName;
//       UserProfile[userLastName] = this.userLastName;
//       UserProfile[DateOfBirth] = this.DateOfBirth;
//       UserProfile[emailId] = this.emailId;
//       UserProfile[MobileNumber] = this.MobileNumber;
//       UserProfile[interests] = this.interests;
//       UserProfile[Password] = this.Password;
//       this.userProfiles.splice(this.UserProfileIndex,1,UserProfile);

//       this.actionButtonName = 'Add';

//      /*  let tempArray: any[];
//       tempArray.splice(2,1,userRecord); */

    //}