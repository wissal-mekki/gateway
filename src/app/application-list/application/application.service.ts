
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs/Rx';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Offer} from '../../offer-list/offer/offer.model';
import {User} from '../../user/user.model';
import {Application} from './application.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:8080/api';

@Injectable()
export class ApplicationService {
    private jwtToken = localStorage.getItem('token');
  Offer = new BehaviorSubject<Offer>(null) ;
  User = new BehaviorSubject<User>(null) ;
    cle  = false;
  constructor(private httpclient: HttpClient) {}
  /*  private extractData(res: Response) {
        let body = res.json();  // If response is a JSON use json()
        if (body) {
            return body.data || body;
        } else {
            return {};
        }
    }*/
 SetUser(user){
   this.User.next(user);}
 GetUser():Observable<User>{
   return this.User.asObservable();
 }
 SetOffer(offer) {
   this.Offer.next(offer);
 }
 GetOffer():Observable<Offer> {
   return this.Offer.asObservable() ;
 }
  private extractData(res: Response) {
    const body = res;
    return body || {};
  }
  getOffer(id: string): Observable<any> {
    const url = `${apiUrl}/questionnaire/`;
    return this.httpclient.get(url +id, httpOptions).pipe(
        map(this.extractData));
  }
  getLastId(): any {
    const url = `${apiUrl}/lastId`;
    return this.httpclient.get(url, httpOptions).pipe(map(this.extractData))
    // .catch(this.handleError);
    // .pipe(map((res:Response) => res.json()));
    //  ;
    // .subscribe(val => console.log(val));
  }
  getApplications(): Observable<any> {
    const url = `${apiUrl}/applications`;
    return this.httpclient.get(url, httpOptions)
        .pipe(map(this.extractData)); // convertir la reponse Observable vers un Array de session
    // .subscribe();
  }

  verify(application: Application){
     let sujet: string ;

     if(application.offer.questionnaire===sujet) {
         this.cle=true;
     }

  }
  addApplication(application:Application): Observable<any> {
     console.log(application);
    const url = `${apiUrl}/application`;
    console.log(this.jwtToken);
    return this.httpclient.post(url,application, {
        headers: new
        HttpHeaders({'authorization': this.jwtToken})
    }).pipe();
  }
  /*
  countFormateur(): Observable<any>{
      const url = `${apiUrl}/nombreFormateur`;
      return this.httpclient.get(url, httpOptions)
          .pipe(map(this.extractData)); // convertir la reponse Observable vers un Array de session
      //.subscribe();
  }*/
  deleteQuestionnaire(questionnaire): Observable<any> {
    const url = `${apiUrl}/questionnaire/`;
    return this.httpclient.delete(url + questionnaire._id, httpOptions)
        .pipe(map(this.extractData));
  }
  updateQuestionnaire(questionnaire): Observable<any> {
    const url = `${apiUrl}/update/`;
    return this.httpclient.put(url + questionnaire._id, questionnaire, httpOptions)
        .pipe(map(this.extractData));
  }
}



