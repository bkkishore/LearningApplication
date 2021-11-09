import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserService } from './user.service';
import { NewLoginComponent } from './new-login/new-login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    AdminHomeComponent,
    NewLoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
     RouterModule.forRoot([
      { path: '', component:LoginComponent , pathMatch: 'full' },
      { path: 'home', component:HomeComponent},
      { path: 'signup', component: SignupComponent},
      {path: 'login', component: LoginComponent},
      {path: 'adminhome', component: AdminHomeComponent}
     
       /* { path: 'first', component: FirstComponentComponent },
      { path: 'second', component: NewSecondComponent },  */
    ]) 
  ],
  
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
