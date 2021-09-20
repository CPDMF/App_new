import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfcoursesPage } from './profcourses.page';

const routes: Routes = [
  {
    path: '',
    component: ProfcoursesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfcoursesPageRoutingModule {}
