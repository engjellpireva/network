import { Observable, mergeMap, of, catchError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser as User } from './interfaces/User';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  deviceInfo: any = null;

  token = localStorage.getItem('access_token');

  loggedIn: boolean = false;

  headers = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`),
  };

  user?: Observable<User>;

  constructor(
    private http: HttpClient,
    private deviceService: DeviceDetectorService,
    private router: Router
  ) {}

  login(form: any) {
    const email = form.controls.email.value;
    const password = form.controls.password.value;

    this.deviceInfo = this.deviceService.getDeviceInfo();

    return this.http
      .post('http://localhost:3000/auth/login', {
        email: email,
        password: password,
        browser: this.deviceInfo.browser,
        browserVersion: this.deviceInfo.browser_version,
        device: this.deviceInfo.device,
        deviceType: this.deviceInfo.deviceType,
        os: this.deviceInfo.os,
        osVersion: this.deviceInfo.os_version,
        userAgent: this.deviceInfo.userAgent,
      })
      .pipe(
        mergeMap((val: any) => {
          localStorage.setItem('access_token', val.access_token);
          this.router.navigate(['/']);
          this.loggedIn = true;
          return of(`Successfully logged in!`);
        }),
        catchError((err) => {
          return of(err.error.message);
        })
      );
  }

  getCurrentUser() {
    if (this.user) return this.user;
    this.user = this.http.get<User>(
      'http://localhost:3000/user/me',
      this.headers
    );
    return this.user;
  }

  isLoggedIn() {
    if (this.loggedIn || this.token) {
      return true;
    } else {
      return false;
    }
  }
}
