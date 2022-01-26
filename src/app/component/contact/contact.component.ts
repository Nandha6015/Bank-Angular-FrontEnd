import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  alert: boolean = false;
  name: string = '';
  email: string = '';
  message: string = '';

  constructor() {}
  processForm() {
    this.alert = true;
    this.name = '';
    this.email = '';
    this.message = '';
  }
  closeAlert() {
    this.alert = false;
  }

  ngOnInit(): void {}
}
