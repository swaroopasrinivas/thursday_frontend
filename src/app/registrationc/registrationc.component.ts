import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrationc',
  templateUrl: './registrationc.component.html',
  styleUrls: ['./registrationc.component.css'],
})
export class RegistrationcComponent implements OnInit {
  user = new User();
  msg = '';

  constructor(private _service: RegistrationService, private _router: Router) {}

  ngOnInit() {}

  registerUser() {
    this._service.registerUserFromRemote(this.user).subscribe(
      (data) => {
        console.log('response received');
        this._router.navigate(['/login']);
        this.msg = 'Registration successful';
      },

      (error) => {
        console.log('exception occured');
        this.msg = error.error;
        console.log('' + this.msg);
      }
    );
  }
}
