import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
export var DatetimePickerComponent = (function () {
    function DatetimePickerComponent() {
    }
    DatetimePickerComponent.prototype.ngOnInit = function () {
        var validators = [];
        if (this.field.control.validator)
            validators.push(this.field.control.validator);
        validators.push(Validators.pattern(/^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (00|[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9])$/));
        this.field.control.setValidators(validators);
        this.sub = this.field.control.valueChanges.subscribe(function (value) {
            // this.request[this.field.id] = moment(value).format()
        });
    };
    DatetimePickerComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
    };
    DatetimePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tw-datetime-picker',
                    template: "\n  <div [formGroup]='group'>\n  <input [formControlName]='field.id' name='{{field.id}}' class='form-control' ng2-datetime-picker close-on-select=\"false\"\n  />\n  <small class='text-danger' *ngIf='field.control.value && field.control.invalid'>Invalid Format : YYYY-MM-DD HH:MM</small>\n</div>\n  "
                },] },
    ];
    /** @nocollapse */
    DatetimePickerComponent.ctorParameters = function () { return []; };
    DatetimePickerComponent.propDecorators = {
        'group': [{ type: Input },],
        'field': [{ type: Input },],
        'request': [{ type: Input },],
    };
    return DatetimePickerComponent;
}());
//# sourceMappingURL=datetime-picker.component.js.map