import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs/Rx';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Questionnaire} from '../questionnaire-list/questionnaire/questionnaire.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:8082/api';

@Injectable()
export class TestService {
  private jwtToken = localStorage.getItem('token');
  score:Number = 0 ;
    /* private dataSource = new BehaviorSubject<Questionnaire>();
    data = this.dataSource.asObservable();*/
  // quest: Observable<Questionnaire>;
Q = new Subject<Questionnaire>();
  constructor(private  httpclient: HttpClient) { }
  private extractData(res: Response) {
    const body = res;
    return body || {};
  }
setQuest(ques:Questionnaire) {
   /* const quest = new BehaviorSubject<Questionnaire>(ques);
    console.log(quest.getValue());
    this.Q=new BehaviorSubject<Questionnaire>(ques);
   // this.quest=new Questionnaire(quest.id,quest.sujet,quest.nbques);
  //   console.log(this.quest.getValue());
    // this.Q.next(this.quest.getValue());*/
   console.log(ques);
   this.Q.next(ques);
    console.log(this.Q);
}
setScore(score) {
    this.score=this.score+score ;
}
getScore(){
    return this.score ;
}
GetApp():Observable<any> {
  const url = `http://localhost:8080/api/lastapp`;
  return this.httpclient.get(url, {
      headers: new
  HttpHeaders({'authorization': this.jwtToken})
}).pipe(map(this.extractData)) ;
}
GetQuest():Observable<Questionnaire> {
  /*  this.Q = new Questionnaire(this.quest.id,this.quest.sujet,this.quest.nbques);
    return this.Q ;*/
   // console.log(this.Q.getValue()) ;
    return this.Q.asObservable() ;
}
  getsubjects(): any {
    const url = `${apiUrl}/sujets`;
    return this.httpclient.get(url, httpOptions).pipe(map(this.extractData))
    // .catch(this.handleError);
    // .pipe(map((res:Response) => res.json()));
    //  ;
    // .subscribe(val => console.log(val));
  }
  getQuestionnaireBySujet(sujet: string): Observable<any> {
    const url = `${apiUrl}/bysujet?sujet=`+sujet;
    console.log(url);
    return this.httpclient.get(url , httpOptions).pipe(
        map(this.extractData));
  }
  getQuestionstest(id:number): Observable<any> {
    const url = `${apiUrl}/questiontest?id=`+id ;
    // +`&id=`+id;
    console.log(url);
    return this.httpclient.get(url , httpOptions).pipe(
        map(this.extractData));
  }
  getPropostionstest(id:number): Observable<any> {
    const url = `${apiUrl}/propositiontest?id=`+id ;
    // +`&id=`+id;
    console.log(url);
    return this.httpclient.get(url , httpOptions).pipe(
        map(this.extractData));
  }
 /* SetNumber(nbprop) {
    this.nbprop=nbprop;
  }
  GetNumber() {
    return this.nbprop ;
  }*/
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

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
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
