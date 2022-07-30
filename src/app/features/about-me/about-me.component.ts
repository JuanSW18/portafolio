import { Component, OnInit } from '@angular/core';
import { ABOUT_ME_ES } from './data/about-me.constants';
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

  get aboutMeLabels() {
    return ABOUT_ME_ES;
  }

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
