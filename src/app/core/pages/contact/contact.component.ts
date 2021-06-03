import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../interfaces/contact';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactList: Contact[];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContact().subscribe(data =>{
      this.contactList = data;
    });
  }

  //listar(): void {
    //this.contatosService.getContato().subscribe(data => this.contatos = data);
  //}

  // listar(): any {
  //   return this.contatos;
  // }

}

