import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private user: UserService) {}
  us: User = new User();
  ngOnInit(): void {}
  saveuser(obj: any) {
    this.us.name = obj.name;
    this.us.emailid = obj.emailid;
    this.us.password = obj.password;
    this.us.mobilenumber = obj.mobilenumber;
    if (this.us !== null) {
      this.user.save(this.us).subscribe((res) => {
        console.log(res);
      });
    }
  }
}
