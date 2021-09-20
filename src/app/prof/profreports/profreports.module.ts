import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfreportsPageRoutingModule } from './profreports-routing.module';

import { ProfreportsPage } from './profreports.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfreportsPageRoutingModule
  ],
  declarations: [ProfreportsPage]
})
export class ProfreportsPageModule {}
