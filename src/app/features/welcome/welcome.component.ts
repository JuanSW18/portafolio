import { Component, OnInit } from '@angular/core';
import { WELCOME_ES } from './data/welcome.constants';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  constructor() { }

  get welcomeLabels() {
    return WELCOME_ES;
  }

}
