import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarContactosComponent } from './agregar-contactos/agregar-contactos.component';
import { ContactosComponent } from './contactos/contactos.component';

const routes: Routes = [
  { path: '', component: ContactosComponent   },
  { path: 'agregarContacto', component: AgregarContactosComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactosRoutingModule { }
