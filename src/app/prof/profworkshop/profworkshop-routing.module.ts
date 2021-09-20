import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfworkshopPage } from './profworkshop.page';

const routes: Routes = [
  {
    path: '',
    component: ProfworkshopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfworkshopPageRoutingModule {}
