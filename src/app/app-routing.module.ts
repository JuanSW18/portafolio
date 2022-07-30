import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContainerComponent } from './layout/main-container/main-container.component';

const routes: Routes = [{
  path: '',
  component: MainContainerComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      loadChildren: 
        () => import('./features/welcome/welcome.module').then(
          (m) => m.WelcomeModule
        )
    },
    {
      path: 'about-me',
      loadChildren: 
        () => import('./features/about-me/about-me.module').then(
          (m) => m.AboutMeModule
        )
    },
    {
      path: 'projects',
      loadChildren: 
        () => import('./features/projects/projects.module').then(
          (m) => m.ProjectsModule
        )
    },
    {
      path: 'contact-me',
      loadChildren: 
        () => import('./features/contact-me/contact-me.module').then(
          (m) => m.ContactMeModule
        )
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
