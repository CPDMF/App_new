import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfblogsPageRoutingModule } from './profblogs-routing.module';

import { ProfblogsPage } from './profblogs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfblogsPageRoutingModule
  ],
  declarations: [ProfblogsPage]
})
export class ProfblogsPageModule {}
