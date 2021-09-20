import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfpaymentsPageRoutingModule } from './profpayments-routing.module';

import { ProfpaymentsPage } from './profpayments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfpaymentsPageRoutingModule
  ],
  declarations: [ProfpaymentsPage]
})
export class ProfpaymentsPageModule {}
