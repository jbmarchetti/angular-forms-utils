import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFormsUtilsModule } from '../src';
import { DemoComponent } from './demo.component';
import { TranslateModule } from '@ngx-translate/core'
import { DropdownTreeviewModule } from 'ng2-dropdown-treeview';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, AngularFormsUtilsModule.forRoot(), TranslateModule.forRoot(), DropdownTreeviewModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule { }