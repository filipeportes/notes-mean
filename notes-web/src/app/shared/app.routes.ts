import {RouterConfig, provideRouter} from "@angular/router";
import {SignupComponent} from "../signup/signup.component";
import {LoginComponent} from "../signin/signin.component";
import {NotesComponent} from "../notes/notes.component";
import {NOTES_ROUTES} from "../notes/notes.routes";
import {AuthGuardService} from "./auth-guard.service";

export const routes:RouterConfig = [
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: LoginComponent},
  {path: 'notes', component: NotesComponent, children: NOTES_ROUTES, canActivate: [AuthGuardService]}
];

export const appRouterProviders = [
  provideRouter(routes)
]
