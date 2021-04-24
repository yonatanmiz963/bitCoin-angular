import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/Contact';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  @Input() contacts: Contact[]
  @Output() onSelectContact = new EventEmitter<string>()

  constructor() { }
  trackByFn(idx, contact: Contact) {
    return contact._id
  }
  ngOnInit(): void {
  }

}
