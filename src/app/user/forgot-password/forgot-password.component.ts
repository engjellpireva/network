import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  email = new FormControl('', [Validators.required]);

  resetPasswordForm = new FormGroup({
    email: this.email,
  });

  constructor() {}

  ngOnInit(): void {}
}
