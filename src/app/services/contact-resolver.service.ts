import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service'

@Injectable({
  providedIn: 'root'
})
export class ContactResolverService implements Resolve<Observable<Contact>> {

  constructor(private contactService: ContactService) { }

  resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params
    // this.msgService.setLoading(true)
    // console.log('resolve', id);
    
    return this.contactService.getContactById(id)
    // .pipe(
    // catchError(err => this.msgService.sendAlert(err))
    // )
  }
}
