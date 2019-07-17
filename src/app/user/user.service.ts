import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/Rx';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:8080/api';

@Injectable()
export class UserService {
  constructor(private httpclient: HttpClient) {}


  private extractData(res: Response) {
    const body = res;
    return body || {};
  }
  getUser(id: string): Observable<any> {
    const url = `${apiUrl}/user/`;
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
  getUsers(): Observable<any> {
    const url = `${apiUrl}/users`;
    return this.httpclient.get(url, httpOptions)
        .pipe(map(this.extractData)); // convertir la reponse Observable vers un Array de session
    // .subscribe();
  }

  addUser(user): Observable<any> {
    const url = `${apiUrl}/signUp`;
    return this.httpclient.post(url, user, httpOptions)
        .pipe();
  }
  /*
  countFormateur(): Observable<any>{
      const url = `${apiUrl}/nombreFormateur`;
      return this.httpclient.get(url, httpOptions)
          .pipe(map(this.extractData)); // convertir la reponse Observable vers un Array de session
      //.subscribe();
  }*/
  deleteUser(user): Observable<any> {
    const url = `${apiUrl}/user/`;
    return this.httpclient.delete(url + user.id, httpOptions)
        .pipe(map(this.extractData));
  }
  updateUser(user): Observable<any> {
    const url = `${apiUrl}/update/`;
    return this.httpclient.put(url + user.id, user, httpOptions)
        .pipe(map(this.extractData));
  }
}
