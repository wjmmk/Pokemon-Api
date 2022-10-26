import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PermitionsGuard } from "../guards/permitions.guard";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    {path: 'login', component: LoginComponent, canActivate: [PermitionsGuard]},
    {path: 'register', component: RegisterComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AuthRoutingModule { }