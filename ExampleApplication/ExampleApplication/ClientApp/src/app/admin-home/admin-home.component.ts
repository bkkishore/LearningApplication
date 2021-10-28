import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
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
  loginError:boolean
  
  constructor(private route: Router, private httpService:HttpClient) { }

  ngOnInit() {
  }



        GetUserProfile()
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
      
      
      const headersForAPI = new HttpHeaders();
      headersForAPI.append('Content-Type', 'application/json');
      headersForAPI.append('Accept', 'application/json');

      this.httpService.get('https://localhost:44372/api/User/GetUserProfile').subscribe((res:any) => {

      
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
      this.userProfiles.push(UserProfile)
      console.log(UserProfile);
      console.log(res);  
      this.userProfiles=res;
      },
      );  
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