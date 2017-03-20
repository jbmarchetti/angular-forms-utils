import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import * as moment from 'moment';
export var DatePickerComponent = (function () {
    function DatePickerComponent() {
    }
    DatePickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var validators = [];
        if (this.field.control.validator)
            validators.push(this.field.control.validator);
        validators.push(Validators.pattern(/^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$/));
        this.field.control.setValidators(validators);
        this.sub = this.field.control.valueChanges.subscribe(function (value) {
            if (value)
                _this.request[_this.field.id] = moment(value).format('YYYY-MM-DD');
        });
    };
    DatePickerComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
    };
    DatePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tw-date-picker',
                    template: "\n  <div [formGroup]='group'>\n   <input [formControlName]='field.id' name='{{field.id}}'  class='form-control' ng2-datetime-picker\n      close-on-select=\"false\" date-only=\"true\" />\n  <small class='text-danger' *ngIf='field.control.value && field.control.invalid'>Invalid Format : YYYY-MM-DD</small>\n</div>\n  "
                },] },
    ];
    /** @nocollapse */
    DatePickerComponent.ctorParameters = function () { return []; };
    DatePickerComponent.propDecorators = {
        'group': [{ type: Input },],
        'field': [{ type: Input },],
        'request': [{ type: Input },],
    };
    return DatePickerComponent;
}());
//# sourceMappingURL=date-picker.component.js.map