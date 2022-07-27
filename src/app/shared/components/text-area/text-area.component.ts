import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wc-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent {

  counter: number = 0;
  value: string = '';

  @Input() label: string;
  @Input() maxChars: number;

  constructor() { }

  getCounter() {
    return String(this.value.length);
  }

}
