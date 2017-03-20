import { NgModule } from '@angular/core';
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
import { DaysOfWeekComponent } from './reactive-form/days-of-week/days-of-week.component';
import { TextAreaComponent } from './reactive-form/textarea/textarea.component';
var decExp = [
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
    TextAreaComponent
];
export var AngularFormsUtilsModule = (function () {
    function AngularFormsUtilsModule() {
    }
    AngularFormsUtilsModule.forRoot = function () {
        return {
            ngModule: AngularFormsUtilsModule
        };
    };
    AngularFormsUtilsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        ReactiveFormsModule,
                        CommonModule,
                        TranslateModule,
                        Ng2DatetimePickerModule,
                        FormsModule
                    ],
                    declarations: decExp,
                    exports: decExp
                },] },
    ];
    /** @nocollapse */
    AngularFormsUtilsModule.ctorParameters = function () { return []; };
    return AngularFormsUtilsModule;
}());
//# sourceMappingURL=angularFormsUtils.module.js.map