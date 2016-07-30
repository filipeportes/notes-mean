import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/Rx";

@Injectable()
export class HttpClient {

  constructor(private http:Http) {
  }

  get(url:string):Observable<any> {
    return this.http.get(url, HttpClient.getHeaders())
      .map(response => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  post(url:string, body:any):Observable<any> {
    return this.http.post(url, JSON.stringify(body), HttpClient.getHeaders());
  }

  put(url:string, body:any):Observable<any> {
    return this.http.put(url, JSON.stringify(body), HttpClient.getHeaders());
  }

  delete(url:string):Observable<any> {
    return this.http.delete(url, HttpClient.getHeaders());
  }

  static getHeaders():any {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Auth-Token', localStorage.getItem('X-Auth-Token'));

    return {headers: headers};
  }
}
