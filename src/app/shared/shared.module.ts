import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { ModalService } from './services/modal/modal.service';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [ModalComponent, InputComponent],
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  exports: [ModalComponent, InputComponent],
  providers: [ModalService],
})
export class SharedModule {}
