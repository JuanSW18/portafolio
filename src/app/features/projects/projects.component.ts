import { Component, OnInit } from '@angular/core';
import { PROJECT_LIST } from './data/projects.contants';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  get projectList() {
    return PROJECT_LIST;
  }

}
