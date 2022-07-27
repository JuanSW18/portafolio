import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor() { }

  openSocialNetwork(name: string) {
    const socialNetworks = Object.create(environment.socialNetwork);
    const url = socialNetworks[name];
    window.open(url, '_blank');
  }

}
