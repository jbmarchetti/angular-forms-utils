import { Component, Input } from '@angular/core';
export var TextAreaComponent = (function () {
    function TextAreaComponent() {
    }
    TextAreaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tw-textarea',
                    template: "\n  <div [formGroup]='group'>\n   <textarea [formControlName]='field.id' name='{{field.id}}' class='form-control' [(ngModel)]=\"request[field.id]\"></textarea>\n</div>\n  "
                },] },
    ];
    /** @nocollapse */
    TextAreaComponent.ctorParameters = function () { return []; };
    TextAreaComponent.propDecorators = {
        'group': [{ type: Input },],
        'field': [{ type: Input },],
        'request': [{ type: Input },],
    };
    return TextAreaComponent;
}());
//# sourceMappingURL=textarea.component.js.map