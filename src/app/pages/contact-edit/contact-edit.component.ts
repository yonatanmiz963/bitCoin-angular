import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactService, private location: Location) { }

  contact: Contact

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      if (!Object.keys(data).length) {
        this.contact = this.contactService.getEmptyContact()
      } else {
        this.contact = data.contact
      }
    })
    // This is an ugly syntax of rxjs: operator(operatorFunction)(sourceObservable)
    // mergeMap((params: Params) => params.id ? this.ContactService.getById(params.id) : of(this.ContactService.getEmptyContact()))(this.route.params)
    //   .subscribe(Contact => this.Contact = Contact)
  }
  onSaveContact() {
    console.log(this.contact);
    
    this.contactService.saveContact(this.contact)
    this.router.navigateByUrl('/contact')
  }

  
  onRemoveContact() {
    this.contactService.deleteContact(this.contact._id)
    this.router.navigateByUrl('/')
  }
}