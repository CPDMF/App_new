import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profdashboard',
    loadChildren: () => import('./profdashboard/profdashboard.module').then( m => m.ProfdashboardPageModule)
  },
  {
    path: 'profblogs',
    loadChildren: () => import('./prof/profblogs/profblogs.module').then( m => m.ProfblogsPageModule)
  },
  {
    path: 'profcourses',
    loadChildren: () => import('./prof/profcourses/profcourses.module').then( m => m.ProfcoursesPageModule)
  },
  {
    path: 'profcpdrecords',
    loadChildren: () => import('./prof/profcpdrecords/profcpdrecords.module').then( m => m.ProfcpdrecordsPageModule)
  },
  {
    path: 'profforum',
    loadChildren: () => import('./prof/profforum/profforum.module').then( m => m.ProfforumPageModule)
  },
  {
    path: 'profjobs',
    loadChildren: () => import('./prof/profjobs/profjobs.module').then( m => m.ProfjobsPageModule)
  },
  {
    path: 'profpayments',
    loadChildren: () => import('./prof/profpayments/profpayments.module').then( m => m.ProfpaymentsPageModule)
  },
  {
    path: 'profreports',
    loadChildren: () => import('./prof/profreports/profreports.module').then( m => m.ProfreportsPageModule)
  },
  {
    path: 'profworkshop',
    loadChildren: () => import('./prof/profworkshop/profworkshop.module').then( m => m.ProfworkshopPageModule)
  },
  {
    path: 'addblogs',
    loadChildren: () => import('./prof/addblogs/addblogs.module').then( m => m.AddblogsPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
