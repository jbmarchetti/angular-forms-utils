import { Component, Input } from '@angular/core';
export var InputTextComponent = (function () {
    function InputTextComponent() {
    }
    InputTextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tw-input-text',
                    templateUrl: './input-text.component.html',
                    styleUrls: ['./input-text.component.scss']
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