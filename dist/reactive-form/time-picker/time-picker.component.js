import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
export var TimePickerComponent = (function () {
    function TimePickerComponent() {
    }
    TimePickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var validators = [];
        if (this.field.control.validator)
            validators.push(this.field.control.validator);
        validators.push(Validators.pattern(/^(00|0[0-9]|1[0-9]|2[0-3]):(0[0-9]|[0-5][0-9])(:([0-9]|[0-5][0-9]))?$/));
        this.field.control.setValidators(validators);
        this.field.control.setValue(this.request[this.field.id]);
        this.sub = this.field.control.valueChanges.subscribe(function (value) {
            _this.request[_this.field.id] = value;
        });
    };
    TimePickerComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
    };
    TimePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tw-time-picker',
                    templateUrl: './time-picker.component.html',
                    styleUrls: ['./time-picker.component.scss']
                },] },
    ];
    /** @nocollapse */
    TimePickerComponent.ctorParameters = function () { return []; };
    TimePickerComponent.propDecorators = {
        'group': [{ type: Input },],
        'field': [{ type: Input },],
        'request': [{ type: Input },],
    };
    return TimePickerComponent;
}());
//# sourceMappingURL=time-picker.component.js.map