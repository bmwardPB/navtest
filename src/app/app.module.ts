import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SubcompaComponent } from './subcompa/subcompa.component';
import { SubcompbComponent } from './subcompb/subcompb.component';
import { SubcompcComponent } from './subcompc/subcompc.component';

@NgModule({
  declarations: [
    AppComponent,
    SubcompaComponent,
    SubcompbComponent,
    SubcompcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
