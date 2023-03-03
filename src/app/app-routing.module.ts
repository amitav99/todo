import { NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path: 'login',component:LoginComponent},
  {path: 'welcome', component:WelcomeComponent },
  {path: 'todos', component:ListTodosComponent },
  {path:'logout', component:LogoutComponent},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  {
  message = 'Some Welcome Message'

  constructor(private route:ActivatedRoute)
  {}
  ngOnInIt(){
    console.log(this.route.snapshot.params['name'])
  }
}
