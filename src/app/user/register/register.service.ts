import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, mergeMap, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  register(form: any) {
    const firstName = form.controls.firstName.value;
    const lastName = form.controls.lastName.value;
    const email = form.controls.email.value;
    const password = form.controls.password.value;
    const dateOfBirth = form.controls.dateOfBirth.value;
    const gender = form.controls.gender.value;

    return this.http
      .post('http://localhost:3000/auth/register', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        dateOfBirth: dateOfBirth,
        gender: gender,
      })
      .pipe(
        mergeMap((val) => {
          return of(`Account ${firstName} ${lastName} created`);
        }),
        catchError((err) => {
          return of(err.error.message);
        })
      );
  }
}
