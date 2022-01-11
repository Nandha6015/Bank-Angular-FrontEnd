import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  register: string = 'Active';

  isActive(item: string) {
    this.register = '';
    switch (item) {
      case 'register':
        this.register = 'active';
        break;
    }
  }
}
