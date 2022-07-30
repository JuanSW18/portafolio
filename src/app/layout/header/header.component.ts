import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HEADER_ES } from './data/header.constants';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isNavbarActive: boolean = false;

  constructor(private router: Router) { }

  get navItems() {
    return HEADER_ES;
  }

  toggleNavbar() {
    this.isNavbarActive = !this.isNavbarActive;
  }

  redirect(path: string) {
    this.isNavbarActive = false;
    this.router.navigate([`/${path}`])
  }
}
