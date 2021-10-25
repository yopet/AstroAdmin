import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PilotoPageRoutingModule } from './piloto-routing.module';

import { PilotoPage } from './piloto.page';
import {HeaderComponent} from '../../../common/header/header.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {TableComponent} from '../../../common/table/table.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PilotoPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [PilotoPage,HeaderComponent,TableComponent]
})
export class PilotoPageModule {}
