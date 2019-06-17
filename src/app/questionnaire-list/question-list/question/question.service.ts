import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:8080/api';



@Injectable()
export class QuestionService {
    nbprop:any;
  constructor(private httpclient: HttpClient) {}
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

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
  getQuestionnaire(id: string): Observable<any> {
    const url = `${apiUrl}/questionnaire/`;
    return this.httpclient.get(url +id, httpOptions).pipe(
        map(this.extractData));
  }
    SetNumber(nbprop) {
        this.nbprop=nbprop;
    }
    GetNumber() {
        return this.nbprop ;
    }
getLastId(): any {
    const url = `${apiUrl}/lastId`;
    return this.httpclient.get(url, httpOptions).pipe(map(this.extractData))
        // .catch(this.handleError);
    // .pipe(map((res:Response) => res.json()));
      //  ;
    // .subscribe(val => console.log(val));
}
  getQuestionnaires(): Observable<any> {
    const url = `${apiUrl}/questionnaires`;
    return this.httpclient.get(url, httpOptions)
        .pipe(map(this.extractData)); // convertir la reponse Observable vers un Array de session
    // .subscribe();
  }

  addQuestion(question): Observable<any> {
    const url = `${apiUrl}/question`;
    return this.httpclient.post(url, question, httpOptions)
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
    return this.httpclient.delete(url + questionnaire._id, httpOptions)
        .pipe(map(this.extractData));
  }
  updateQuestionnaire(questionnaire): Observable<any> {
    const url = `${apiUrl}/update/`;
    return this.httpclient.put(url + questionnaire._id, questionnaire, httpOptions)
        .pipe(map(this.extractData));
  }
}
