import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFormsUtilsModule } from '../src';
import { DemoComponent } from './demo.component';
import { TranslateModule } from '@ngx-translate/core'
import { TreeviewModule } from 'ngx-treeview';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, AngularFormsUtilsModule.forRoot(), TranslateModule.forRoot(), TreeviewModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule { }