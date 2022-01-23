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
import { HomeloanComponent } from './component/homeloan/homeloan.component';
import { CarloanComponent } from './component/carloan/carloan.component';
import { GoldloanComponent } from './component/goldloan/goldloan.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    HomeloanComponent,
    CarloanComponent,
    GoldloanComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
