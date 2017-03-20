import { Component, Input } from '@angular/core';
export var GroupSelectComponent = (function () {
    function GroupSelectComponent() {
    }
    GroupSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tw-groupselect',
                    template: "\n  <div [formGroup]='group'>\n  <select [formControlName]='field.id' name='{{field.id}}' class='form-control' [(ngModel)]=\"request[field.id]\" >\n        <option [ngValue]=\"field.firstValue.value \" *ngIf='field.firstValue' >{{field.firstValue.text | translate}}</option>\n        <optgroup label=\"{{group.label}}\" *ngFor=\"let group of field.options\">\n        <option [ngValue]=\"option[field.optionValue]\" *ngFor=\"let option of group.values\">\n          {{option[field.optionText]}}\n        </option>\n      </optgroup>\n    </select>\n</div>\n  "
                },] },
    ];
    /** @nocollapse */
    GroupSelectComponent.ctorParameters = function () { return []; };
    GroupSelectComponent.propDecorators = {
        'group': [{ type: Input },],
        'field': [{ type: Input },],
        'request': [{ type: Input },],
    };
    return GroupSelectComponent;
}());
//# sourceMappingURL=group-select.component.js.map