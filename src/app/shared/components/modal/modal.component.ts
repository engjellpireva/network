import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() modalID: string = '';
  @Input() title: string = '';

  constructor(public modal: ModalService) {}

  ngOnInit(): void {
    this.modal.register('register');
    this.modal.register('newPost');
  }
}
