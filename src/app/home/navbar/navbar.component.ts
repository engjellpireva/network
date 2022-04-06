import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faSearch,
  faUserFriends,
  faUsers,
  faPlus,
  faBell,
  faComment,
  faSortDown,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  faUserFriends = faUserFriends;
  faUsers = faUsers;
  faSearch = faSearch;
  faHome = faHome;
  faPlus = faPlus;
  faBell = faBell;
  faComment = faComment;
  faSortDown = faSortDown;

  dropdown = false;

  middleLinks: { id: number; name: string; link: string; icon: IconProp }[] = [
    {
      id: 0,
      name: 'Home',
      link: '/',
      icon: faHome,
    },
    {
      id: 1,
      name: 'Friends',
      link: '/settings',
      icon: faUserFriends,
    },
    {
      id: 2,
      name: 'Groups',
      link: '/groups/feed',
      icon: faUsers,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
