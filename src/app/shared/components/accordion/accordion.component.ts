import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wc-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  @Input() title: string;

  constructor() { }
}
