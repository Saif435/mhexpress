import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClientAreaModule } from 'src/client-area/client-area.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { MainInterceptor } from './shared/main.interceptor';

@NgModule({
  declarations: [AppComponent, LoadingComponent],
  imports: [
    ClientAreaModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MainInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
