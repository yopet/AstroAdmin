import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasajeroPageRoutingModule } from './pasajero-routing.module';

import { PasajeroPage } from './pasajero.page';
import {HeaderComponent} from '../../../common/header/header.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {TableComponent} from '../../../common/table/table.component'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasajeroPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [PasajeroPage,HeaderComponent,TableComponent]
})
export class PasajeroPageModule {}
