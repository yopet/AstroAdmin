import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AeronavePageRoutingModule } from './aeronave-routing.module';

import { AeronavePage } from './aeronave.page';

import {HeaderComponent} from '../../../common/header/header.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {TableComponent} from '../../../common/table/table.component'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AeronavePageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [AeronavePage,HeaderComponent,TableComponent]
})
export class AeronavePageModule {}
