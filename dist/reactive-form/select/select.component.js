import { Component, Input } from '@angular/core';
export var SelectComponent = (function () {
    function SelectComponent() {
    }
    SelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tw-select',
                    templateUrl: './select.component.html',
                    styleUrls: ['./select.component.scss']
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