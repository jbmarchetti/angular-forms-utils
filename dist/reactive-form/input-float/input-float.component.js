import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
export var InputFloatComponent = (function () {
    function InputFloatComponent() {
    }
    InputFloatComponent.prototype.ngOnInit = function () {
        var _this = this;
        var validators = [];
        if (this.field.control.validator)
            validators.push(this.field.control.validator);
        validators.push(Validators.pattern(/^[+-]?([0-9]*[.])?[0-9]+$/));
        this.field.control.setValidators(validators);
        this.sub = this.field.control.valueChanges.subscribe(function (value) {
            _this.request[_this.field.id] = parseFloat(value);
        });
    };
    InputFloatComponent.prototype.ngOnDestroy = function () {
        if (this.sub)
            this.sub.unsubscribe();
    };
    InputFloatComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tw-input-float',
                    template: "\n  <div [formGroup]='group'>\n    <input [formControlName]='field.id' name='{{field.id}}' type='text' class='form-control' [readonly]='field.readonly' />\n  </div>"
                },] },
    ];
    /** @nocollapse */
    InputFloatComponent.ctorParameters = function () { return []; };
    InputFloatComponent.propDecorators = {
        'group': [{ type: Input },],
        'field': [{ type: Input },],
        'request': [{ type: Input },],
    };
    return InputFloatComponent;
}());
//# sourceMappingURL=input-float.component.js.map