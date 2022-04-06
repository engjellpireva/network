import { ToastrService } from 'ngx-toastr';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { HomeService } from './../home.service';
import { ModalService } from 'src/app/shared/services/modal/modal.service';
import { IUser } from './../../auth/interfaces/User';
import { AuthService } from './../../auth/auth.service';
import { NewPostService } from './new-post.service';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { faFile, faImages } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent implements OnInit {
  @Input() type: string = '';

  faImages = faImages;
  faFile = faFile;

  description = new FormControl('', [Validators.required]);

  newPostForm = new FormGroup({
    description: this.description,
  });

  response: any;
  user: IUser | null | undefined;
  file: File = null;
  imageSrc: any;

  constructor(
    private newPostService: NewPostService,
    private authService: AuthService,
    private modal: ModalService,
    private homeService: HomeService,
    private toast: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((res: any) => {
      this.user = res as IUser;
    });
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = (e) => (this.imageSrc = reader.result);

      reader.readAsDataURL(this.file);
    }
  }

  onUpload() {
    console.log(this.file);
  }

  async createPost() {
    if (this.type == 'photo') {
      this.onUpload();
      return console.log('This is a photo, not inserted into the database!');
    }

    this.modal.toggleModal('newPost');

    this.response = await firstValueFrom(
      this.newPostService.createPost(this.description.value, this.user?.id)
    );

    if (this.response.message == 'Unauthorized') {
      this.toast.error('Something went wrong. Redirecting you back to login.');
      setTimeout(() => this.router.navigate(['login']), 1500);
    } else {
      this.toast.success(this.response.message);
    }
  }

  changeType(type: string) {
    if (this.type == 'photo') {
      this.type = 'text';
    } else {
      this.type = type;
    }
  }
}
