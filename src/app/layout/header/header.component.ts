import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isNavbarActive: boolean = false;

  constructor(private router: Router) { }

  toggleNavbar() {
    this.isNavbarActive = !this.isNavbarActive;
  }

  redirect(path: string) {
    this.isNavbarActive = false;
    this.router.navigate([`/${path}`])
  }
}
