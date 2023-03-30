import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor(private http: HttpClient) { }

  getContactos(params?:{
    tipo?:number
  }){
    return this.http.get(`http://localhost:4200/api/contactos/contactos`,{params:params})
  }

  addContacto(){
    /* TODO */
  }

  updateContacto(){
    /* TODO */
  }

  deleteContacto(){
    /* TODO */
  }

}
