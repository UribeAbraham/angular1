import { Component, OnInit } from '@angular/core';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html'
})
export class ContactosComponent implements OnInit {
  contactos:Array<any>=[];
  constructor(
    private contactosService: ContactosService
  ) { }

  ngOnInit(): void {
    this.contactosService.getContactos().subscribe((res:any)=>{console.log(res)
      if(res.ok){
        this.contactos=res.contactos;
      }
    })
  }

}
