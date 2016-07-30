import {Component, OnInit} from "@angular/core";
import {AuthService} from "../shared/auth.service";
import {User} from "../shared/users";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class SignupComponent implements OnInit {

  public user:User = new User("", "");

  constructor(private authService:AuthService) {
  }

  ngOnInit() {
  }

  onSubmit():void {
    this.authService.signUp(this.user).subscribe(
      currentUser => console.log(currentUser),
      error => console.error(error)
    );
  }
}
