import { Component, OnInit } from '@angular/core';
import {OfferService} from './offer/offer.service';
import {Offer} from './offer/offer.model';
import {BehaviorSubject} from 'rxjs/Rx';
import {UrlSerializer} from '@angular/router';
import {User} from '../user/user.model';
import {LoginService} from '../login/login.service';
import {ApplicationService} from '../application-list/application/application.service';
import {Application} from '../application-list/application/application.model';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent implements OnInit {
offers: Offer[] ;
  constructor(private offerhttp: OfferService,private loginservice:LoginService,private applicationService:ApplicationService) { }

  ngOnInit() {
    this.offerhttp.getOffers().subscribe(data => {
      this.offers=data ;
    })
  }
Postuler(offer) {
      this.applicationService.SetOffer(offer);
  //  this.Offer.next(offer);
     this.loginservice.getconnectedUser().subscribe(data => {
      const  user = data ;
         this.applicationService.SetUser(user);
         console.log(user);
    });
}
}
