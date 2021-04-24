import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private contactService: ContactService) { }
  userSub: Subscription
  coinRateSub: Subscription
  user: User
  coinRate: number

  ngOnInit(): void {
    this.userSub = this.contactService.user$.subscribe(data => this.user = data)
    this.getCoinRate()
  }

  async getCoinRate() {
    this.coinRateSub = this.contactService.getCoinRate().subscribe(data => this.coinRate = data)
  }

  get userMoves() {
    return this.user.moves.slice(0,3)
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe()
    this.coinRateSub.unsubscribe()
  }

}
