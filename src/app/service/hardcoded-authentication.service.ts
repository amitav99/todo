import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
 authenticate({ username, password }: { username: string; password: string; }): boolean {
  // console.log('before' +this.isUserLoggedIn());
  if(username==="amitav" && password==="dummy"){
    // sessionStorage.setItem('authenticateUser', username);
    // console.log('after' +this.isUserLoggedIn());
    return true;
  }
  else
  return false;
 }
isUserLoggedIn(): boolean{
   let user = sessionStorage.getItem('authenticateUser')
   return !(user === null)
   } 
}
