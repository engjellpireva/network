import { IUser } from './../../auth/interfaces/User';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  faHome,
  faUserFriends,
  faWrench,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  // Icons

  routes: {
    id: number;
    name: string;
    link: string;
    icon?: any;
    children?: Object;
  }[] = [
    {
      id: 0,
      name: 'Home',
      link: '/',
      icon: faHome,
    },
    {
      id: 1,
      name: 'Friends',
      link: '/login',
      icon: faUserFriends,
    },
    {
      id: 2,
      name: 'Settings',
      link: '/settings',
      icon: faWrench,
    },
    {
      id: 3,
      name: 'Groups',
      link: '/groups/feed',
      icon: faUsers,
    },
  ];

  user: IUser | null | undefined;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((res: any) => {
      this.user = res as IUser;
    });
  }
}
