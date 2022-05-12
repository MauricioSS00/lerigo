import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2'

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

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.request = request;

    if (this.isRequestUriToApi()) {
      if (!this.authenticated()) {
        return EMPTY;
      }
      this.setAuthHeader();
    }
    
    return next.handle(this.request).pipe(
      catchError(error => {
        console.log(error);
        if (error.status = 401 && error.error?.status == "Token is Expired") {
          this.router.navigate(['home']);
          Swal.fire({
            icon: 'info',
            title: 'Poxa, sua sessão expirou',
            text: 'Para continuar usando, basta logar novamente'
        });
        } else if (error.status = 401 && error.error?.status == "Authorization Token not found") {
          this.router.navigate(['home']);
          Swal.fire({
            icon: 'info',
            title: 'Acesso Restrito',
            text: 'Para realizar esta operação é necessario realizar o login'
        });
        }
        return throwError(error);
      })
    );
  }

}
