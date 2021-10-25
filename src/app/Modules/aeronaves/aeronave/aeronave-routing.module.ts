import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AeronavePage } from './aeronave.page';

const routes: Routes = [
  {
    path: '',
    component: AeronavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AeronavePageRoutingModule {}
