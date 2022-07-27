import { Component, OnInit } from '@angular/core';
import { EDUCATION_LIST } from './data/education.constants';
import { JOB_LIST } from './data/jobs.constants';
import { TECH_LIST } from './data/tech.constants';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  get educationList() {
    return EDUCATION_LIST
  }
  
  get jobList() {
    return JOB_LIST
  }

  get techList() {
    return TECH_LIST;
  }

  ngOnInit(): void {
  }

}
