import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router:Router) {
  }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<any> | boolean {
    if (AuthService.isAuthenticated()) {
      return true;
    } else {
      return Observable.create(observer => {
        this.router.navigate(['/signin']);
        observer.next(false);
      });
    }
  }

}
