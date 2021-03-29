import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ThreeDataService } from '../services/three-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThreeSampleComponent } from './three-sample/three-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreeSampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  //{ provide: MyService, useFactory: myServiceFactory, deps: [] }
  bootstrap: [AppComponent]
})
export class AppModule { }
