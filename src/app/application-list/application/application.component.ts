import { Component, OnInit } from '@angular/core';
import {ApplicationService} from './application.service';
import {Application} from './application.model';
import {Offer} from '../../offer-list/offer/offer.model';
import {User} from '../../user/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
    app: Application;
    offer: Offer;
    user: User;

    constructor(private applicationService: ApplicationService,private  router:Router) {
    }

    ngOnInit() {
    }

    addApplication(application) {
        this.applicationService.GetOffer().subscribe(data => {
            this.offer = data;
        });
        this.applicationService.GetUser().subscribe(data => {
            this.user = data;
        });
        console.log(this.offer,this.user) ;
        this.app = new Application(null,application['cv'],application['lettre'],this.user,this.offer);
    console.log(this.app);
        this.applicationService.addApplication(this.app).subscribe(res => {
            // y console.log(res);
        }, (err) => {
            console.log(err);
        });
        this.router.navigate(['/test']) ;
    }
}
