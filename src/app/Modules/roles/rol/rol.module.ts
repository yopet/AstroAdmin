import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RolPageRoutingModule } from './rol-routing.module';

import { RolPage } from './rol.page';
import {HeaderComponent} from '../../../common/header/header.component'
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {TableComponent} from '../../../common/table/table.component'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RolPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [RolPage , HeaderComponent ,TableComponent]
})
export class RolPageModule {}
