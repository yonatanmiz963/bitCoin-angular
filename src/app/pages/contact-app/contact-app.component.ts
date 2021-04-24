import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'contact-app',
  templateUrl: './contact-app.component.html',
  styleUrls: ['./contact-app.component.scss']
})
export class ContactAppComponent implements OnInit {
  // Contacts: Contact[]

  contacts$: Observable<Contact[]>
  // subscription: Subscription

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    // Before using the async pipe:
    // this.subscription = this.ContactService.Contacts$.subscribe(Contacts => {
    //   this.Contacts = Contacts
    // })
    this.contactService.loadContacts()
    this.contacts$ = this.contactService.contacts$
  }
  // ngOnDestroy() {
  //   this.subscription.unsubscribe()
  // }
}
