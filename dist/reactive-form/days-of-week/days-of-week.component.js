import { Component, Input } from '@angular/core';
export var DaysOfWeekComponent = (function () {
    function DaysOfWeekComponent() {
    }
    Object.defineProperty(DaysOfWeekComponent.prototype, "daysOfWeek", {
        get: function () {
            return [
                { val: 'sunday', text: 'sunday' },
                { val: 'monday', text: 'monday' },
                { val: 'tuesday', text: 'tuesday' },
                { val: 'wednesday', text: 'wednesday' },
                { val: 'thursday', text: 'thursday' },
                { val: 'friday', text: 'friday' },
                { val: 'saturday', text: 'saturday' }
            ];
        },
        enumerable: true,
        configurable: true
    });
    DaysOfWeekComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tw-dof',
                    template: "\n  <div [formGroup]='group'>\n    <select [formControlName]='field.id' name='{{field.id}}' class='form-control' [(ngModel)]=\"request[field.id]\" >\n      <option [ngValue]=\"option.val\" *ngFor=\"let option of daysOfWeek\">\n        {{option.text | translate}}\n      </option>\n    </select>\n</div>\n  "
                },] },
    ];
    /** @nocollapse */
    DaysOfWeekComponent.ctorParameters = function () { return []; };
    DaysOfWeekComponent.propDecorators = {
        'group': [{ type: Input },],
        'field': [{ type: Input },],
        'request': [{ type: Input },],
    };
    return DaysOfWeekComponent;
}());
//# sourceMappingURL=days-of-week.component.js.map