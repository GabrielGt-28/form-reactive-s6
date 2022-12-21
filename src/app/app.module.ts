import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PracticeFormReactiveComponent } from './practice-form-reactive/practice-form-reactive.component';

@NgModule({
  declarations: [AppComponent, PracticeFormReactiveComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
