import {bootstrap} from "@angular/platform-browser-dynamic";
import {enableProdMode} from "@angular/core";
import {AppComponent, environment} from "./app/";
import {AuthService} from "./app/shared/auth.service";
import {HttpClient} from "./app/shared/http.client";
import {appRouterProviders} from "./app/shared/app.routes";
import {disableDeprecatedForms, provideForms} from "@angular/forms";
import {HTTP_PROVIDERS} from "@angular/http";
import {AuthGuardService} from "./app/shared/auth-guard.service";

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS,
  HttpClient,
  AuthService,
  AuthGuardService,
  appRouterProviders,
]);

