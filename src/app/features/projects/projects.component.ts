import { Component, OnInit } from '@angular/core';
import { PROJECT_ES, PROJECT_LIST } from './data/projects.contants';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  constructor() { }

  get projectLabels() {
    return PROJECT_ES;
  }

  get projectList() {
    return PROJECT_LIST;
  }

}
