
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { AppComponent } from './app.component';
import { CoreModule } from './core/common/core.module';
import { AppRoutingModule } from './app.routing.module';


@NgModule({
  declarations:
    [
      AppComponent
    ],
  imports:
    [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      MatSliderModule,
      AppRoutingModule,
      CoreModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
