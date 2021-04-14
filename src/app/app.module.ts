import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AutofocusFixModule } from 'ngx-autofocus-fix'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AutofocusFixModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
