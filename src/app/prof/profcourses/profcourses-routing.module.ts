import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfcoursesPage } from './profcourses.page';

const routes: Routes = [
  {
    path: '',
    component: ProfcoursesPage
  },
  {
    path: 'mycourses',
    loadChildren: () => import('./mycourses/mycourses.module').then( m => m.MycoursesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfcoursesPageRoutingModule {}
