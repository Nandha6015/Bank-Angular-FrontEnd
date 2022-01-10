import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  home: string = 'active';
  loan: string = '';
  aboutus: string = '';
  contact: string = '';
  login: string = '';

  isActive(item: string) {
    this.home = '';
    this.loan = '';
    this.aboutus = '';
    this.contact = '';
    this.login = '';
    switch (item) {
      case 'home':
        this.home = 'active';
        break;
      case 'loan':
        this.loan = 'active';
        break;
      case 'aboutus':
        this.aboutus = 'active';
        break;
      case 'contact':
        this.contact = 'active';
        break;
      case 'login':
        this.login = 'active';
        break;
    }
  }
}
