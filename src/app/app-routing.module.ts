import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../app/Guards/auth-guard.service';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
   {
    path: 'rol',
    loadChildren: () => import('./Modules/roles/rol/rol.module').then( m => m.RolPageModule),
    canActivate: [AuthGuardService],
    data: {
      roles: ['ROLE_ADMIN']
    }
  },
  {
    path: 'perfil',
    loadChildren: () => import('./Modules/perfiles/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [AuthGuardService],
    data: {
      roles: ['ROLE_ADMIN']
    }
  },
  {
    path: 'usuario',
    loadChildren: () => import('./Modules/usuarios/usuario/usuario.module').then( m => m.UsuarioPageModule),
    canActivate: [AuthGuardService],
    data: {
      roles: ['ROLE_ADMIN']
    }
  },
  {
    path: 'piloto',
    loadChildren: () => import('./Modules/pilotos/piloto/piloto.module').then( m => m.PilotoPageModule),
    canActivate: [AuthGuardService],
    data: {
      roles: ['ROLE_ADMIN']
    }
  },
  {
    path: 'pasajero',
    loadChildren: () => import('./Modules/pasajeros/pasajero/pasajero.module').then( m => m.PasajeroPageModule),
    canActivate: [AuthGuardService],
    data: {
      roles: ['ROLE_ADMIN']
    }
  },
  {
    path: 'viaje',
    loadChildren: () => import('./Modules/viajes/viaje/viaje.module').then( m => m.ViajePageModule),
    canActivate: [AuthGuardService],
    data: {
      roles: ['ROLE_ADMIN','ROLE_USER']
    }
  },
  {
    path: 'aeronave',
    loadChildren: () => import('./Modules/aeronaves/aeronave/aeronave.module').then( m => m.AeronavePageModule),
    canActivate: [AuthGuardService],
    data: {
      roles: ['ROLE_ADMIN']
    }
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
