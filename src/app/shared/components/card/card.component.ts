import { Component, Input, OnInit } from '@angular/core';
import { IProjectItem } from '../../interfaces/project.interface';

@Component({
  selector: 'wc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data: IProjectItem;

  constructor() { }

  ngOnInit(): void {
  }

}
