import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfdashboardPage } from './profdashboard.page';

const routes: Routes = [
  {
    path: '',
    component: ProfdashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfdashboardPageRoutingModule {}
