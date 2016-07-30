import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {User} from "./users";

@Injectable()
export class AuthService {

  signIn(user:User):Observable<any> {
    return Observable.create(observer => {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(
          currentUser => {
            currentUser.getToken().then(token => {
              localStorage.setItem('X-Auth-Token', token);
              observer.next(currentUser);
            })
          },
          error => observer.error(error)
        );
    });
  }

  signUp(user:User):Observable<any> {
    return Observable.create(observer => {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(
          currentUser => {
            currentUser.getToken().then(token => {
              observer.next(currentUser);
            });
          },
          error => observer.error(error)
        );
    });
  }

  signOut():Observable<any> {
    return Observable.create(observer => {
      firebase.auth().signOut()
        .then(
          () => {
            localStorage.clear();
            observer.next();
          },
          error => observer.error(error)
        );
    });
  }

  static isAuthenticated():boolean {
    if (firebase.auth().currentUser) {
      return true;
    } else {
      return false;
    }
  }
}
