import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Contact } from 'src/app/models/Contact';
import { Move } from 'src/app/models/move.model';
import { User } from 'src/app/models/user';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  @Input() selectedContactId: string

  contact: Contact
  answer$: Observable<string>
  subscription: Subscription
  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router) { }

  userSub: Subscription
  user: User


  get contactMoves() {
    return this.user.moves.filter((move: Move) => move.toId === this.contact._id)
  }

  ngOnInit(): void {
    this.userSub = this.contactService.user$.subscribe(data => {
      this.user = data
      console.log('this.user:', this.user)
    })
    this.subscription = this.route.data.subscribe(data => {
      this.contact = data.contact
    })
    // Without Observable   this.route.snapshot.params.id
    // this.subscription = this.route.params.pipe(
    //   mergeMap(params => this.ContactService.getById(params.id))
    // ).subscribe(Contact => {
    //   this.Contact = Contact
    // })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
