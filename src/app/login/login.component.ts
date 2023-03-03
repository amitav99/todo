import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = 'amitav'
   password = '';
  errormessage='Invalid Credentials';
  invalidLogin =false;

  // public get password() 
  // {
  //   return this._password;
  // }
  // public set password(value) {
  //   this._password = value;
  // }
  //when creating a route
  //Router
  //Angular.giveme Router
  //Dependency Injection(this is presently used to route)
  constructor(private router: Router,
    private hardcodedAuthenticationService:HardcodedAuthenticationService){}
  
  handlelogin(){
    console.log(this.username)
    console.log(this.password)
    if (this.hardcodedAuthenticationService.authenticate({ username: this.username, password: this.password }))
    // if(this.username==="Amitav" && this.password === "dummy")
    //Redirect to Welcome Page
    { 
       this.router.navigate(['welcome'])
       this.invalidLogin = false
    }
    else {
      this.invalidLogin = true
    }
  }
}    
