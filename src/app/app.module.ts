import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdChipsModule} from '@angular/material';

import {AppComponent} from './app.component';
import {HttpAuth} from './shared/services/api/http-auth';
import {PeopleListComponent} from './people-list/people-list.component';
import {PeopleService} from './shared/services/people/people.service';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent
  ],
  imports: [
    BrowserModule, HttpModule,
    BrowserAnimationsModule, MdChipsModule
  ],
  providers: [HttpAuth, PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
