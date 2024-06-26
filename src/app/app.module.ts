import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { CounterModule } from './counter/counter.modules';
import { HeroesModule } from './heroes/heroes.module';
import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
