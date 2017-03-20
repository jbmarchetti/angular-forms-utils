import { Component, Input } from '@angular/core';
export var SelectComponent = (function () {
    function SelectComponent() {
    }
    SelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tw-select',
                    template: "\n  <div [formGroup]='group'>\n  <select [formControlName]='field.id' name='{{field.id}}' class='form-control' [(ngModel)]=\"request[field.id]\">\n      <option [ngValue]=\"field.firstValue.value \" *ngIf='field.firstValue' >{{field.firstValue.text | translate}}</option>\n      <option [ngValue]=\"option[field.optionValue] \" *ngFor=\"let option of field.options \">\n        {{option[field.optionText]}}\n      </option>\n    </select>\n</div>\n  "
                },] },
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return []; };
    SelectComponent.propDecorators = {
        'group': [{ type: Input },],
        'field': [{ type: Input },],
        'request': [{ type: Input },],
    };
    return SelectComponent;
}());
//# sourceMappingURL=select.component.js.map