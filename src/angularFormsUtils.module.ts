import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
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
import { TreeViewComponent } from './reactive-form/treeview/treeview.component'
import { TreeViewTxtComponent } from './reactive-form/treeview-txt/treeview-txt.component'
import { TreeViewRadioComponent } from './reactive-form/treeview-radio/treeview-radio.component'
import { TreeViewItemComponent } from './reactive-form/treeview-radio/treeview-item.component'

import { BusyButtonComponent } from './busy-button/busy-button.component'
import { BusyService } from './busy-button/busy.service'
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

import { DropdownTreeviewModule } from 'ng2-dropdown-treeview';
import { NguiDatetimePickerModule, NguiDatetime } from '@ngui/datetime-picker';
import * as moment from 'moment'


NguiDatetime.parseDate = (str: any): any => {
  let m: any = moment(str)
  if (!m.isValid()) { //Time
    // let tmp = str.split(':');
    m = moment()
    // m.set('hour', parseInt(tmp[0] || '0', 10))
    // m.set('minute', parseInt(tmp[1] || '0', 10))
    // m.set('second', parseInt(tmp[2] || '0', 10))
  }
  return m.toDate()
}

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
    BusyButtonComponent,
    TreeViewComponent,
    TreeViewTxtComponent,
    TreeViewRadioComponent,
    TreeViewItemComponent
  ]


@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    TranslateModule,
    MultiselectDropdownModule,
    NguiDatetimePickerModule,
    FormsModule,
    DropdownTreeviewModule
  ],
  declarations: decExp,
  exports: [...decExp]
})
export class AngularFormsUtilsModule {

  public static forRoot(): ModuleWithProviders {
    return { ngModule: AngularFormsUtilsModule, providers: [BusyService] };
  }


}