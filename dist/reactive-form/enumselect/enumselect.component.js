import { Component, Input } from '@angular/core';
export var EnumselectComponent = (function () {
    function EnumselectComponent() {
    }
    EnumselectComponent.prototype.enumToArray = function (enumObj) {
        return Object.keys(enumObj).slice(Object.keys(enumObj).length / 2);
    };
    EnumselectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tw-enumselect',
                    template: "\n  <div [formGroup]='group'>\n  <select [formControlName]='field.id' name='{{field.id}}' class='form-control' [(ngModel)]=\"request[field.id]\">\n      <option [ngValue]=\"field.firstValue.value\" *ngIf='field.firstValue' >{{field.firstValue.text | translate}}</option>\n      <option [ngValue]=\"option\" *ngFor=\"let option of enumToArray(field.options)\">\n        {{option}}\n      </option>\n    </select>\n</div>\n  "
                },] },
    ];
    /** @nocollapse */
    EnumselectComponent.ctorParameters = function () { return []; };
    EnumselectComponent.propDecorators = {
        'group': [{ type: Input },],
        'field': [{ type: Input },],
        'request': [{ type: Input },],
    };
    return EnumselectComponent;
}());
//# sourceMappingURL=enumselect.component.js.map