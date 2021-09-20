import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfcpdrecordsPageRoutingModule } from './profcpdrecords-routing.module';

import { ProfcpdrecordsPage } from './profcpdrecords.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfcpdrecordsPageRoutingModule
  ],
  declarations: [ProfcpdrecordsPage]
})
export class ProfcpdrecordsPageModule {}
