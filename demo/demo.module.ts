import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFormsUtilsModule } from '../src';
import { DemoComponent } from './demo.component';
import { TranslateModule } from '@ngx-translate/core'
@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, AngularFormsUtilsModule.forRoot(), TranslateModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule { }