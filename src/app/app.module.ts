import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChessModule } from './modules/chess/chess.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
