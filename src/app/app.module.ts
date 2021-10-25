import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor/interceptor.service';
import { HttpClientModule } from "@angular/common/http";
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
