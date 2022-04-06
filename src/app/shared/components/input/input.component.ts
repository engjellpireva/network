import { FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() control: FormControl = new FormControl();
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() minlength: string = '';
  constructor() {}

  ngOnInit(): void {}
}
