import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalService } from 'src/app/shared/services/modal/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  loginForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  constructor(public modal: ModalService, private authService: AuthService) {}

  ngOnInit(): void {}

  openModal($e: Event) {
    $e.preventDefault();

    this.modal.toggleModal('register');
  }

  response: any;

  login() {
    this.response = this.authService.login(this.loginForm);
  }
}
