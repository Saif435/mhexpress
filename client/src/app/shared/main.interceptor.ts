import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { LoadingService } from './loading/loading.service';
import { Router } from '@angular/router';

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService, private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingService.requestStarted();
    return next.handle(request).pipe(
      catchError((error) => {
        this.router.navigate(['/']);
        return Observable.throw(error);
      }),
      finalize(() => {
        this.loadingService.requestEnded();
      })
    );
  }
}
