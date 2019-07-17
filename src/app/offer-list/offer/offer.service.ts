import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/Rx';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const apiUrl = 'http://localhost:8080/api';

@Injectable()
export class OfferService {
  private jwtToken = localStorage.getItem('token');
  constructor(private httpclient: HttpClient) {
   /* let headers = new HttpHeaders();
    headers.append('authorization', this.jwtToken);*/
   /* let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json','authorization': this.jwtToken})
    };*/
  }
  /*  private extractData(res: Response) {
        let body = res.json();  // If response is a JSON use json()
        if (body) {
            return body.data || body;
        } else {
            return {};
        }
    }*/


  private extractData(res: Response) {
    const body = res;
    return body || {};
  }
  getOffer(id: string): Observable<any> {
    const url = `${apiUrl}/questionnaire/`;
    return this.httpclient.get(url +id, {headers: new
      HttpHeaders({'authorization': this.jwtToken}) }).pipe(
        map(this.extractData));
  }
  getLastId(): any {
    const url = `${apiUrl}/lastId`;
    return this.httpclient.get(url, {headers: new
      HttpHeaders({'authorization': this.jwtToken}) }).pipe(map(this.extractData))
    // .catch(this.handleError);
    // .pipe(map((res:Response) => res.json()));
    //  ;
    // .subscribe(val => console.log(val));
  }
  getOffers(): Observable<any> {
    const url = `${apiUrl}/offers`;
    return this.httpclient.get(url, {headers: new
      HttpHeaders({'authorization': this.jwtToken}) })
        .pipe(map(this.extractData)); // convertir la reponse Observable vers un Array de session
    // .subscribe();
  }

  addQuestion(question): Observable<any> {
    const url = `${apiUrl}/question`;
    return this.httpclient.post(url, question, {headers: new
      HttpHeaders({'authorization': this.jwtToken}) })
        .pipe();
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
    return this.httpclient.delete(url + questionnaire._id, {headers: new
      HttpHeaders({'authorization': this.jwtToken}) })
        .pipe(map(this.extractData));
  }
  updateQuestionnaire(questionnaire): Observable<any> {
    const url = `${apiUrl}/update/`;
    return this.httpclient.put(url + questionnaire._id, questionnaire, {headers: new
      HttpHeaders({'authorization': this.jwtToken}) })
        .pipe(map(this.extractData));
  }
}
