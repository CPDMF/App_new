import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfworkshopPageRoutingModule } from './profworkshop-routing.module';

import { ProfworkshopPage } from './profworkshop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfworkshopPageRoutingModule
  ],
  declarations: [ProfworkshopPage]
})
export class ProfworkshopPageModule {}
