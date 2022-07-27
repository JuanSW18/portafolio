import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './features/about-me/about-me.component';
import { ContactMeComponent } from './features/contact-me/contact-me.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { MainContainerComponent } from './layout/main-container/main-container.component';

const routes: Routes = [{
  path: '',
  component: MainContainerComponent,
  children: [
    {
      path: '',
      component: WelcomeComponent,
    },
    {
      path: 'about-me',
      component: AboutMeComponent,
    },
    {
      path: 'projects',
      component: ProjectsComponent,
    },
    {
      path: 'contact-me',
      component: ContactMeComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
