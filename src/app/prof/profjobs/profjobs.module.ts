import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfjobsPageRoutingModule } from './profjobs-routing.module';

import { ProfjobsPage } from './profjobs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfjobsPageRoutingModule
  ],
  declarations: [ProfjobsPage]
})
export class ProfjobsPageModule {}
