import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {RegisterComponent} from "./component/register/register.component";
import {ResetPasswordComponent} from "./component/reset-password/reset-password.component";
import {VerifyComponent} from "./component/verify/verify.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'resetpassword', component: ResetPasswordComponent},
  {path: 'user/verify/account/:key', component: VerifyComponent},
  {path: 'user/verify/password/:key', component: VerifyComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
