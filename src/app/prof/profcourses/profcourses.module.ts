import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfcoursesPageRoutingModule } from './profcourses-routing.module';

import { ProfcoursesPage } from './profcourses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfcoursesPageRoutingModule
  ],
  declarations: [ProfcoursesPage]
})
export class ProfcoursesPageModule {}
