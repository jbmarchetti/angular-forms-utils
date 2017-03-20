import { Component, Input } from '@angular/core';
export var SwitchComponent = (function () {
    function SwitchComponent() {
    }
    SwitchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tw-switch',
                    template: "\n  <div [formGroup]='group'>\n  <label class=\"switch switch-icon switch-pill switch-primary-outline-alt\">\n        <input type=\"checkbox\" [formControlName]='field.id' class=\"switch-input\" checked=\"{{request[field.id]}}\" [(ngModel)]=\"request[field.id]\" >\n        <span class=\"switch-label\" data-on=\"yes\" data-off=\"no\"></span>\n        <span class=\"switch-handle\"></span>\n    </label>\n</div>\n  "
                },] },
    ];
    /** @nocollapse */
    SwitchComponent.ctorParameters = function () { return []; };
    SwitchComponent.propDecorators = {
        'group': [{ type: Input },],
        'field': [{ type: Input },],
        'request': [{ type: Input },],
    };
    return SwitchComponent;
}());
//# sourceMappingURL=switch.component.js.map