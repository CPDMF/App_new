import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfjobsPage } from './profjobs.page';

const routes: Routes = [
  {
    path: '',
    component: ProfjobsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfjobsPageRoutingModule {}
