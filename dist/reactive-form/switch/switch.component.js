import { Component, Input } from '@angular/core';
export var SwitchComponent = (function () {
    function SwitchComponent() {
    }
    SwitchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tw-switch',
                    templateUrl: './switch.component.html',
                    styleUrls: ['./switch.component.scss']
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