import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddblogsPageRoutingModule } from './addblogs-routing.module';

import { AddblogsPage } from './addblogs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddblogsPageRoutingModule
  ],
  declarations: [AddblogsPage]
})
export class AddblogsPageModule {}
