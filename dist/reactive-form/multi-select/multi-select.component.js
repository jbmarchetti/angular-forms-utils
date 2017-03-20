import { Component, Input } from '@angular/core';
export var MultiSelectComponent = (function () {
    function MultiSelectComponent() {
    }
    MultiSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tw-multiselect',
                    template: "\n  <div [formGroup]='group'>\n   <select multiple [formControlName]='field.id' name='{{field.id}}' class='form-control' [(ngModel)]=\"request[field.id]\">\n      <option [ngValue]=\"option[field.optionValue]\" *ngFor=\"let option of field.options\">\n        {{option[field.optionText]}}\n      </option>\n    </select>\n</div>\n  "
                },] },
    ];
    /** @nocollapse */
    MultiSelectComponent.ctorParameters = function () { return []; };
    MultiSelectComponent.propDecorators = {
        'group': [{ type: Input },],
        'field': [{ type: Input },],
        'request': [{ type: Input },],
    };
    return MultiSelectComponent;
}());
//# sourceMappingURL=multi-select.component.js.map