import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { DatecountPipe } from './datecount.pipe';
import { VistedrepoDirective } from './vistedrepo.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DatecountPipe,
    VistedrepoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
