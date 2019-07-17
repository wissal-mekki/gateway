import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:8082/api';

@Injectable()

export class QuestionnaireService {
nbques: Number ;
nbquestion : Number ;
p: Number = 1 ;
  constructor(private httpclient: HttpClient) {}
    setPage(p) {
        this.p = p;
      //  this.nbquestion=nbquestion;
    }
    getPage():Number {
      return this.p ; // 'nbquestion':this.nbquestion}
    }
SetNumber(nbques) {
      this.nbques=nbques;
}
GetNumber() {
      return this.nbques ;
}
    private extractData(res: Response) {
        const body = res;
        return body || {};
    }

    getQuestionnaire(id: string): Observable<any> {
        const url = `${apiUrl}/questionnaire/`;
        return this.httpclient.get(url +id, httpOptions).pipe(
            map(this.extractData));
    }

    getQuestionnaires(): Observable<any> {
        const url = `${apiUrl}/questionnaires`;
        return this.httpclient.get(url, httpOptions)
            .pipe(map(this.extractData)); // convertir la reponse Observable vers un Array de session
        // .subscribe();
    }

    addQuestionnaire(questionnaire): Observable<any> {
        const url = `${apiUrl}/questionnaire`;
        return this.httpclient.post(url, questionnaire, httpOptions)
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
