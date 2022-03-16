import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  private readonly URN_SKIP_CHECK = [];

  private request: HttpRequest<any>;

  constructor(
    private authService: AuthService,
    private tokenSvc: TokenService,
    private router: Router
  ) { }


  private isRequestUriToApi() {
    return this.request.url.includes(environment.urlApi);
  }

  private mustCheckTokenValidity() {
    for (const regexp of this.URN_SKIP_CHECK) {
      if (this.request.url.match(regexp)) {
        return false;
      }
    }
    return true;
  }

  private isValidToken() {
    return this.mustCheckTokenValidity() && !this.authService.getLogado;
  }

  private authenticated() {
    if (this.isValidToken()) {
      this.authService.logout();
      window.location.reload();
      return false;
    }
    return true;
  }

  private setAuthHeader() {
    if (this.tokenSvc.apiToken && !this.request.headers.has('Authorization')) {
      this.request = this.request.clone({ setHeaders: { Authorization: this.tokenSvc.apiToken } });
    }
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.request = request;

    if (this.isRequestUriToApi()) {
      if (!this.authenticated()) {
        return EMPTY;
      }
      this.setAuthHeader();
    }

    return next.handle(this.request).pipe(
      finalize(() => {
          console.log("Terminou a requisicao");
        }));
  }
}
