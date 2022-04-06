import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ModalService } from 'src/app/shared/services/modal/modal.service';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  firstName = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  lastName = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
  ]);
  dateOfBirth = new FormControl('', [Validators.required]);
  gender = new FormControl('', [Validators.required]);

  registerForm = new FormGroup({
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    password: this.password,
    dateOfBirth: this.dateOfBirth,
    gender: this.gender,
  });

  constructor(
    public modal: ModalService,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {}

  response: any;

  register() {
    this.response = this.registerService.register(this.registerForm);
    // this.registerService.register(this.registerForm);
  }
}
