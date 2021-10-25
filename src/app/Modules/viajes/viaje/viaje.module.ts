import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajePageRoutingModule } from './viaje-routing.module';

import { ViajePage } from './viaje.page';
import {HeaderComponent} from '../../../common/header/header.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {TableComponent} from '../../../common/table/table.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajePageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [ViajePage,HeaderComponent,TableComponent]
})
export class ViajePageModule {}
