import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularMaterialModule } from './angular.material.module';

import 'hammerjs';

import { AppComponent } from './app.component';
import { GeneralComponent } from './general/general.component';

@NgModule({
  declarations: [
    AppComponent,GeneralComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
