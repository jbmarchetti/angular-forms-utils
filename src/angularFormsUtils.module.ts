import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
import { DatetimePickerComponent } from './reactive-form/datetime-picker/datetime-picker.component';
import { SelectComponent } from './reactive-form/select/select.component';
import { EnumselectComponent } from './reactive-form/enumselect/enumselect.component';
import { InputTextComponent } from './reactive-form/input-text/input-text.component';
import { InputFloatComponent } from './reactive-form/input-float/input-float.component';
import { TimePickerComponent } from './reactive-form/time-picker/time-picker.component';
import { SwitchComponent } from './reactive-form/switch/switch.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    TranslateModule,
    Ng2DatetimePickerModule,
    FormsModule
  ],
  declarations: [ReactiveFormComponent, DatetimePickerComponent, SelectComponent, EnumselectComponent, InputTextComponent, InputFloatComponent, TimePickerComponent, SwitchComponent],
  exports: [ReactiveFormComponent]
})
export class AngularFormsUtilsModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AngularFormsUtilsModule
    }
  }

}