import { catchError, mergeMap, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(private http: HttpClient) {}

  changePassword(form: any, userId: any) {
    console.log('called');
    const currentPassword = form.controls.currentPassword.value;
    const newPassword = form.controls.newPassword.value;
    const confirmNewPassword = form.controls.confirmNewPassword.value;
    const id = userId;

    return this.http
      .post('http://localhost:3000/user/change-password', {
        currentPassword: currentPassword,
        newPassword: newPassword,
        confirmNewPassword: confirmNewPassword,
        userId: id,
      })
      .pipe(
        mergeMap((val) => {
          return of(val);
        }),
        catchError((err) => {
          return of(err.error);
        })
      );
  }

  clearLogin(loginId: number) {
    return this.http.post(
      `http://localhost:3000/user/logins/clear/${loginId}`,

      {}
    );
  }
}
