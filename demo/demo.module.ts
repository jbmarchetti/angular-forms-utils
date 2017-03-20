import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFormsUtilsModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, AngularFormsUtilsModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}