import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfblogsPage } from './profblogs.page';

const routes: Routes = [
  {
    path: '',
    component: ProfblogsPage
  },
  {
    path: 'myblogs',
    loadChildren: () => import('./myblogs/myblogs.module').then( m => m.MyblogsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfblogsPageRoutingModule {}
