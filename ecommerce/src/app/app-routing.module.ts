import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';


const routes: Routes = [
  {path: '', redirectTo:'Log',  pathMatch: 'full'},
  {path:'Log', component: LoginComponent},
  {path:'Sign', component: SignComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

