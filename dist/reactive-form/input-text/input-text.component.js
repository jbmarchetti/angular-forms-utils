import { Component, Input } from '@angular/core';
export var InputTextComponent = (function () {
    function InputTextComponent() {
    }
    InputTextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tw-input-text',
                    template: "\n   <div [formGroup]='group'>\n  <input [formControlName]='field.id' name='{{field.id}}' type='{{field.type}}' class='form-control' [(ngModel)]=\"request[field.id]\"\n    [readonly]='field.readonly' />\n</div>\n   "
                },] },
    ];
    /** @nocollapse */
    InputTextComponent.ctorParameters = function () { return []; };
    InputTextComponent.propDecorators = {
        'group': [{ type: Input },],
        'field': [{ type: Input },],
        'request': [{ type: Input },],
    };
    return InputTextComponent;
}());
//# sourceMappingURL=input-text.component.js.map