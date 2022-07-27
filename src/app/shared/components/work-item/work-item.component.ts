import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wc-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.scss']
})
export class WorkItemComponent {

  @Input() img: string;
  @Input() job: string;
  @Input() company: string;
  @Input() period: string;

  constructor() { }

}
