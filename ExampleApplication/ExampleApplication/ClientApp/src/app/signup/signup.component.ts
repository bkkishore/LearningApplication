import { Component,Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {UserService} from '../user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitDisabled:boolean=true;
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
  loginError: boolean;
  userRecordIndex: any;

  SignupForm = new FormGroup({
    userId: new FormControl(),
    firstName: new FormControl(),
    LastName: new FormControl(),
    DateOfBirth: new FormControl(),
    CommuicationAddress: new FormControl(),
    emailId: new FormControl(),
    mobileNumber: new FormControl(),
    interests: new FormControl(),
    Password: new FormControl(),
    ConfirmPassword: new FormControl(),
  })

  constructor(private route: Router, private httpService:HttpClient,private userService:UserService) {

   }

        ngOnInit() 
        {
          if (this.userService.userProfile != null || this.userService.userProfile != undefined){
            this.userId=this.userService.userProfile.userId;
            this.userFirstName=this.userService.userProfile.userFirstName;
            this.userLastName=this.userService.userProfile.userLastName ;
            this.DateOfBirth =this.userService.userProfile.DateOfBirth;
            this.CommunicationAddress=this.userService.userProfile.CommunicationAdderss;
            this.emailId=this.userService.userProfile.emailId;
            this.MobileNumber=this.userService.userProfile.MobileNumber;
            this.interests=this.userService.userProfile.interests;
          }
          
            
          }
        
      AddUser()
    {
         
    }

      //   onKeyUpConfirmPassword()
      // {
      //       if(this.userId != '' && this.userFirstName != '' && this.userLastName != '' && this.Password !='' && 
      //       this.CommunicationAddress!='' && this.emailId != '' && this.MobileNumber > 0 &&
      //     this.interests != '' )
      //     {
      //       this.submitDisabled = false;
            
      //     }
      //     else
      //     {
      //       this.submitDisabled = true;
      //     }
      
       //}
       loadUserRecord(user: any, index:any)
       {
         
         this.userRecordIndex = index;
         
         this.userId=user.userId;
         this.userFirstName=user.userFirstName;
         this.userLastName=user.userLastName ;
         this.DateOfBirth =user.dateOfBirth;
         this.CommunicationAddress=user.communicationAdderss;
         this.MobileNumber=user.mobileNumber;
         this.interests=user.interests;
     
         this.actionButtonName = 'Modify';
       } 
      
      
  
      
           InsertUserProfile()
            {
                  let userId='UserId';
                  let userFirstName='UserFirstName';
                  let userLastName ='UserLastName';
                  let Password = 'UserPassword';
                  let DateOfBirth='DateOfBirth';
                  let CommunicationAdderss='CommunicationAddress';
                  let emailId='emailId';
                  let MobileNumber='MobileNumber';
                  let interests ='interests';
                 let UserProfile ={};
                 UserProfile[userId] = this.userId;
                 UserProfile[userFirstName] = this.userFirstName;
                 UserProfile[userLastName] = this.userLastName;
                 UserProfile[Password] = this.Password;
                 UserProfile[DateOfBirth] = this.DateOfBirth;
                 UserProfile[CommunicationAdderss] = this.CommunicationAddress;
                 UserProfile[emailId] = this.emailId;
                 UserProfile[MobileNumber] = this.MobileNumber.toString();
                 UserProfile[interests] = this.interests;
                 console.log(UserProfile);
                 this.userProfiles.push(UserProfile)
                 const headersForAPI = new HttpHeaders();
                 headersForAPI.append('Content-Type', 'application/json');
                 headersForAPI.append('Accept', 'application/json');
             
                 this.httpService.post('https://localhost:44372/api/User/InsertUserProfile',this.userProfiles, {headers: headersForAPI}).subscribe((res:any) => {
             
                 console.log(res);  
                 this.route.navigate(['/login']);
            },
                   error =>{
                   console.log('Invalid user credentials');
                 this.loginError = true;
                   }
                );  
              
               
              
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
