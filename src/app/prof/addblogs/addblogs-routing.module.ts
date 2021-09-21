import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddblogsPage } from './addblogs.page';

const routes: Routes = [
  {
    path: '',
    component: AddblogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddblogsPageRoutingModule {}
