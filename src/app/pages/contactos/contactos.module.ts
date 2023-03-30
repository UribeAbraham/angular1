import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactosRoutingModule } from './contactos-routing.module';
import { ContactosComponent } from './contactos/contactos.component';
import { AgregarContactosComponent } from './agregar-contactos/agregar-contactos.component';


@NgModule({
  declarations: [
    ContactosComponent,
    AgregarContactosComponent
  ],
  imports: [
    CommonModule,
    ContactosRoutingModule
  ]
})
export class ContactosModule { }
