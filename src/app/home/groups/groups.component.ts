import { Component, OnInit } from '@angular/core';
import {
  faUserFriends,
  faImage,
  faUserTag,
  faSmile,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
})
export class GroupsComponent implements OnInit {
  faUserFriends = faUserFriends;
  faImage = faImage;
  faUserTag = faUserTag;
  faSmile = faSmile;
  ngOnInit(): void {}
}
