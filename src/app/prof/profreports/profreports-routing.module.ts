import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfreportsPage } from './profreports.page';

const routes: Routes = [
  {
    path: '',
    component: ProfreportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfreportsPageRoutingModule {}
