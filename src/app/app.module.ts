import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoansComponent } from './component/loans/loans.component';
import { HomeComponent } from './component/home/home.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { RegisterComponent } from './component/register/register.component';
import { ContactComponent } from './component/contact/contact.component';
import 'font-awesome/css/font-awesome.min.css';
import { ProfileComponent } from './component/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    LoansComponent,
    HomeComponent,
    AboutusComponent,
    RegisterComponent,
    ContactComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
