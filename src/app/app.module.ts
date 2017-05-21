import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SmileysComponent } from './smileys.component'

@NgModule({
  declarations: [
      AppComponent,
      SmileysComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
