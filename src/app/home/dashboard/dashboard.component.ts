import { HomeService } from './../home.service';
import { ModalService } from 'src/app/shared/services/modal/modal.service';
import { IUser } from './../../auth/interfaces/User';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  faEllipsisH,
  faImages,
  faSmile,
  faThumbsUp,
  faVideo,
  faComment,
  faShare,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  faImages = faImages;
  faVideo = faVideo;
  faSmile = faSmile;
  faEllipsisH = faEllipsisH;
  faThumbsUp = faThumbsUp;
  faComment = faComment;
  faShare = faShare;

  user: IUser | null | undefined;
  type: string = 'text';
  description: string = '';
  posts: any;

  constructor(
    public modal: ModalService,
    private authService: AuthService,
    private homeService: HomeService
  ) {}

  openModal($e: Event, type: string) {
    $e.preventDefault();

    this.modal.toggleModal('newPost');
    this.type = type;
  }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((res: any) => {
      this.user = res as IUser;
    });
    this.homeService.getAllPosts().subscribe((res) => {
      this.posts = res;
    });
  }

  likePost(id: number) {
    this.homeService.likePost(id, this.user?.id);
  }
}
