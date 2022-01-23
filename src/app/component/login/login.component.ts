import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/services/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private service: UserService, private router: Router) {}
  msg: string = '';
  user1 = new User();

  ngOnInit(): void {}
  loginuser() {
    this.service.login(this.user1).subscribe(
      (data) => {
        console.log('Succesfully updated');
        this.router.navigate(['/']);
      },

      (error) => {
        console.log('Error arrived');
        this.msg = 'Invalid emailid or Password';
      }
    );
  }
}
