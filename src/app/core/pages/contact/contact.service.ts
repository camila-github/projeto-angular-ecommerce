import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../../../interfaces/contact';


@Injectable()
export class ContactService {

  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:3000/contact/';

    // Get all contacts
  getContact(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.baseUrl);
  }




}

