import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfblogsPage } from './profblogs.page';

const routes: Routes = [
  {
    path: '',
    component: ProfblogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfblogsPageRoutingModule {}
