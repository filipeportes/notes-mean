import {Component, OnInit} from "@angular/core";
import {AuthService} from "../shared/auth.service";
import {User} from "../shared/users";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'signin',
  templateUrl: 'signin.component.html',
  styleUrls: ['signin.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent implements OnInit {

  public user:User = new User("", "");

  constructor(private authService:AuthService, private router:Router) {
  }

  onSubmit():void {
    this.authService.signIn(this.user).subscribe(
      currentUser => this.router.navigate(['/notes']),
      error => console.error(error)
    );
  }

  ngOnInit() {
  }

}
