import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {AuthService} from "../shared/auth.service";

@Component({
  moduleId: module.id,
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class MenuComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) {
  }

  isAuthenticated():boolean {
    return AuthService.isAuthenticated();
  }

  logOut():void {
    this.authService.signOut().subscribe(
      () => this.router.navigate(["/signin"]),
      error => console.error(error)
    );
  }

  ngOnInit() {
  }

}
