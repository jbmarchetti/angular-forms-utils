import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
import { DatetimePickerComponent } from './reactive-form/datetime-picker/datetime-picker.component';
import { DatePickerComponent } from './reactive-form/date-picker/date-picker.component';
import { SelectComponent } from './reactive-form/select/select.component';
import { EnumselectComponent } from './reactive-form/enumselect/enumselect.component';
import { InputTextComponent } from './reactive-form/input-text/input-text.component';
import { InputFloatComponent } from './reactive-form/input-float/input-float.component';
import { TimePickerComponent } from './reactive-form/time-picker/time-picker.component';
import { SwitchComponent } from './reactive-form/switch/switch.component';
import { GroupSelectComponent } from './reactive-form/group-select/group-select.component';
import { MultiSelectComponent } from './reactive-form/multi-select/multi-select.component';
import { DaysOfWeekComponent } from './reactive-form/days-of-week/days-of-week.component'
import { TextAreaComponent } from './reactive-form/textarea/textarea.component'

import { BusyButtonComponent } from './busy-button/busy-button.component'
import { BusyService } from './busy-button/busy.service'

let decExp: any[] =
  [
    ReactiveFormComponent,
    DatetimePickerComponent,
    SelectComponent,
    EnumselectComponent,
    InputTextComponent,
    InputFloatComponent,
    TimePickerComponent,
    SwitchComponent,
    GroupSelectComponent,
    DatePickerComponent,
    DaysOfWeekComponent,
    MultiSelectComponent,
    TextAreaComponent,
    BusyButtonComponent
  ]


@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    TranslateModule,
    Ng2DatetimePickerModule,
    FormsModule
  ],
  declarations: decExp,
  exports: decExp
})
export class AngularFormsUtilsModule {

  public static forRoot(): ModuleWithProviders {
    return { ngModule: AngularFormsUtilsModule, providers: [BusyService] };
  }


}