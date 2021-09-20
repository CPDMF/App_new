import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfforumPage } from './profforum.page';

const routes: Routes = [
  {
    path: '',
    component: ProfforumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfforumPageRoutingModule {}
