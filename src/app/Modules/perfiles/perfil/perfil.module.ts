import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';
import {HeaderComponent} from '../../../common/header/header.component'
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {TableComponent} from '../../../common/table/table.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [PerfilPage,HeaderComponent,TableComponent]
})
export class PerfilPageModule {}
