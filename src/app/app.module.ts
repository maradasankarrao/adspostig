import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { NavigationbarComponent } from './common/navigationbar/navigationbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MyadsComponent } from './pages/myads/myads.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { ItempageComponent } from './pages/home/itempage/itempage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationbarComponent,
    FooterComponent,
    HomeComponent,
    MyadsComponent,
    InboxComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    ItempageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
