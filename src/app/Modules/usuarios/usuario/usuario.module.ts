import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioPageRoutingModule } from './usuario-routing.module';

import { UsuarioPage } from './usuario.page';
import {HeaderComponent} from '../../../common/header/header.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {TableComponent} from '../../../common/table/table.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [UsuarioPage,HeaderComponent,TableComponent]
})
export class UsuarioPageModule {}
