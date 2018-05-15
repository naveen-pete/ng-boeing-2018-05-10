import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TestInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const newReq = req.clone({
      headers: new HttpHeaders().set('auth', 'abc123')
    });
    console.log('request intercepted:', newReq);
    return next.handle(newReq);
  }
}
