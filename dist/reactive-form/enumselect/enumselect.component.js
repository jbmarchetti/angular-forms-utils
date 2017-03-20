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
                    templateUrl: './enumselect.component.html',
                    styleUrls: ['./enumselect.component.scss']
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