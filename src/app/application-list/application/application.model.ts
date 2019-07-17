import {User} from '../../user/user.model';
import {Offer} from '../../offer-list/offer/offer.model';


export class Application {
    constructor(
        public id: number,
        public cv: string,
        public coveringletter: string,
        public  user:User,
        public  offer:Offer
    ) {}
}
