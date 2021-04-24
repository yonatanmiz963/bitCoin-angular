import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { Move } from 'src/app/models/move.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  @Input() contact: Contact
  move: Move

  onTransferCoins() {
    console.log(this.contact);
    this.move.at = new Date
    this.contactService.addMove(this.move)
  }

  setContact() {
    this.move.toId = this.contact._id
    this.move.to = this.contact.name
  }

  ngOnInit(): void {
    this.setEmptyMove()
    this.setContact()
  }

  setEmptyMove() {
    this.move = {
      toId: '',
      to: '',
      at: null,
      amount: 0
    }
  }
}
