import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
    path: '',
    component: PagesComponent,
    //canActivate:[ AuthGuard ],
    canActivateChild:[],
    children:[
      { path: '', component: BienvenidaComponent },
      { path: 'contactos', loadChildren: () => import('./contactos/contactos.module').then(m => m.ContactosModule) },
    ]
  },
  { path: '**', component: NopagefoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
