import {Headers, Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class HttpAuth {

  constructor(private http: Http) {
  }

  private static setAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' + btoa('admin:admin'));
  }

  get(url) {
    let headers = new Headers();
    HttpAuth.setAuthorizationHeader(headers);

    return this.http.get(url, {
      headers: headers
    });

  }
}
