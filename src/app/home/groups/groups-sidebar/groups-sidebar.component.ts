import { faSafari } from '@fortawesome/free-brands-svg-icons';
import {
  faSearch,
  faNewspaper,
  faPlus,
  faGlobeEurope,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups-sidebar',
  templateUrl: './groups-sidebar.component.html',
  styleUrls: ['./groups-sidebar.component.css'],
})
export class GroupsSidebarComponent implements OnInit {
  faSearch = faSearch;
  faPlus = faPlus;
  creatingGroup = false;
  faGlobeEurope = faGlobeEurope;
  constructor() {}

  links: { id: number; name: string; link: string; icon: IconProp }[] = [
    {
      id: 0,
      name: 'Your feed',
      link: '/groups/feed',
      icon: faNewspaper,
    },
    {
      id: 1,
      name: 'Discover',
      link: '/groups/discover',
      icon: faSafari,
    },
  ];

  ngOnInit(): void {}
}
