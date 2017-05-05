import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdInputModule} from '@angular/material';
import {MdSelectModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {MdSliderModule} from '@angular/material';
@NgModule({
  declarations: [
    
  ],
  imports: [
      BrowserAnimationsModule,
      MdInputModule,    
  ],
  exports: [
    MdSelectModule, MdGridListModule, MdSliderModule
  ],
  providers: [],
  bootstrap: []
})
export class AngularMaterialModule { }
