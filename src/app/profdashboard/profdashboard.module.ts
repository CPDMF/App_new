import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfdashboardPageRoutingModule } from './profdashboard-routing.module';

import { ProfdashboardPage } from './profdashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfdashboardPageRoutingModule
  ],
  declarations: [ProfdashboardPage]
})
export class ProfdashboardPageModule {}
