import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfpaymentsPage } from './profpayments.page';

const routes: Routes = [
  {
    path: '',
    component: ProfpaymentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfpaymentsPageRoutingModule {}
