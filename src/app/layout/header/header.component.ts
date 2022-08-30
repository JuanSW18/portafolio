import { Component } from '@angular/core';
import { HEADER_ES } from './data/header.constants';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isNavbarActive: boolean = false;

  constructor() { }

  get navItems() {
    return HEADER_ES;
  }

  toggleNavbar() {
    this.isNavbarActive = !this.isNavbarActive;
  }
}
