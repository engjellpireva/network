import { firstValueFrom, lastValueFrom } from 'rxjs';
import { SettingsService } from './settings.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from './../../auth/auth.service';
import { IUser } from './../../auth/interfaces/User';
import { Component, OnInit } from '@angular/core';
import {
  faDesktop,
  faMobile,
  faTablet,
  faKey,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  faDesktop = faDesktop;
  faMobile = faMobile;
  faTablet = faTablet;
  faKey = faKey;
  faShieldAlt = faShieldAlt;
  deviceInfo: any = null;

  user: IUser | null | undefined;
  viewLogins = false;
  changePassword = false;
  viewPasswordChanges = false;

  response: any;
  toastColor = 'red';

  currentPassword = new FormControl('', [Validators.required]);
  newPassword = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
  ]);
  confirmNewPassword = new FormControl('', [Validators.required]);

  changePasswordForm = new FormGroup({
    currentPassword: this.currentPassword,
    newPassword: this.newPassword,
    confirmNewPassword: this.confirmNewPassword,
  });

  constructor(
    public deviceService: DeviceDetectorService,
    private authService: AuthService,
    private settingsService: SettingsService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((res: any) => {
      this.user = res as IUser;
    });
    this.deviceInfo = this.deviceService.getDeviceInfo();
  }

  async onChangePassword() {
    this.response = await firstValueFrom(
      this.settingsService.changePassword(
        this.changePasswordForm,
        this.user?.id
      )
    );

    if (this.response.type == 'error') {
      this.toast.error(this.response.message);
    } else {
      this.toast.success(this.response.message);
      this.user = await lastValueFrom(this.authService.getCurrentUser());
    }
  }

  clearLogin(loginId: number) {
    this.settingsService.clearLogin(loginId).subscribe((res: any) => {
      console.log(res);
      if (res.type == 'success') {
        this.authService.getCurrentUser().subscribe((res: any) => {
          this.user = res as IUser;
        });
      }
    });
  }
}
