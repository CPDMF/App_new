import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfforumPageRoutingModule } from './profforum-routing.module';

import { ProfforumPage } from './profforum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfforumPageRoutingModule
  ],
  declarations: [ProfforumPage]
})
export class ProfforumPageModule {}
