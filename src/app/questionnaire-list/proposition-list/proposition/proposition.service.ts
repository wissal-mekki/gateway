import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Question} from '../../question-list/question/question.model';
import {Questionnaire} from '../../questionnaire/questionnaire.model';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:8082/api';
@Injectable()
export class PropositionService {
  Q = new Subject<Question>();
  constructor(private httpclient: HttpClient) { }
  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
  getProposition(id: string): Observable<any> {
    const url = `${apiUrl}/proposition/`;
    return this.httpclient.get(url +id, httpOptions).pipe(
        map(this.extractData));
  }
 SeQuestionForProp(Q:Question) {
    this.Q.next(Q) ;
  }
  GetQuestionForProp(): Observable<Question> {
    return this.Q.asObservable() ;
  }
  getLastQuestion(): any {
    const url = `${apiUrl}/lastQuestion`;
    return this.httpclient.get(url, httpOptions).pipe(map(this.extractData))
    // .catch(this.handleError);
    // .pipe(map((res:Response) => res.json()));
    //  ;
    // .subscribe(val => console.log(val));
  }
  getPropositions(): Observable<any> {
    const url = `${apiUrl}/propositions`;
    return this.httpclient.get(url, httpOptions)
        .pipe(map(this.extractData)); // convertir la reponse Observable vers un Array de session
    // .subscribe();
  }

  addProposition(proposition): Observable<any> {
    const url = `${apiUrl}/proposition`;
    return this.httpclient.post(url, proposition, httpOptions)
        .pipe();
  }
  /*
  countFormateur(): Observable<any>{
      const url = `${apiUrl}/nombreFormateur`;
      return this.httpclient.get(url, httpOptions)
          .pipe(map(this.extractData)); // convertir la reponse Observable vers un Array de session
      //.subscribe();
  }*/
  deleteProposition(proposition): Observable<any> {
    const url = `${apiUrl}/proposition/`;
    return this.httpclient.delete(url + proposition._id, httpOptions)
        .pipe(map(this.extractData));
  }
  updateProposition(proposition): Observable<any> {
    const url = `${apiUrl}/update/`;
    return this.httpclient.put(url + proposition._id, proposition, httpOptions)
        .pipe(map(this.extractData));
  }
}
