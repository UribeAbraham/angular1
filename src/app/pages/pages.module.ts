import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SharedModule } from '../shared/shared.module';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PagesComponent,
    NopagefoundComponent,
    BienvenidaComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    PagesComponent,
  ]
})
export class PagesModule { }
