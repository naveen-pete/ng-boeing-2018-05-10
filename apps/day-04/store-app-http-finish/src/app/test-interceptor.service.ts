import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpResponse,
  HttpRequest,
  HttpHandler
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TestInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('request intercepted:', req);
    return next.handle(req);
  }
}
