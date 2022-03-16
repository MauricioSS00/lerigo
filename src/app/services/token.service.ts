import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private _apiToken: string;
  public apiTokenFrq: string;

  constructor() { }

  get apiToken() {
    return this._apiToken;
  }

  set apiToken(value: string) {
    this._apiToken = value;
  }

  revoke() {
    this.apiToken = undefined;
    this.apiTokenFrq = undefined;
  }
}
