import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { MyadsComponent } from './pages/myads/myads.component';
import { RegisterComponent } from './pages/register/register.component';
import { ItempageComponent } from './pages/home/itempage/itempage.component';


const routes: Routes = [
  {path:"",component:HomeComponent,children:[
    {path:"itempage",component:ItempageComponent},
    {path:"itempage/id",component:ItempageComponent},
  ]},
  {path:"inbox",component:InboxComponent},
  {path:"login",component:LoginComponent},
  {path:"logout",component:LogoutComponent},
  {path:"myads",component:MyadsComponent},
  {path:"register",component:RegisterComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
