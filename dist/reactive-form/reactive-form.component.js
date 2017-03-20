import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
export var ReactiveFormComponent = (function () {
    function ReactiveFormComponent() {
        this.fields = [];
        this.events = []; // use later to display form changes
        this.afterInit = new EventEmitter(true);
    }
    ReactiveFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fields.forEach(function (field) {
            var control = new FormControl('');
            if (field.required)
                control.setValidators(Validators.required);
            field.control = control;
            _this.form.addControl(field.id, control);
        });
        this.afterInit.next(true);
    };
    ReactiveFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tw-reactive-form',
                    templateUrl: './reactive-form.component.html',
                    styleUrls: ['./reactive-form.component.scss']
                },] },
    ];
    /** @nocollapse */
    ReactiveFormComponent.ctorParameters = function () { return []; };
    ReactiveFormComponent.propDecorators = {
        'fields': [{ type: Input },],
        'form': [{ type: Input },],
        'request': [{ type: Input },],
        'afterInit': [{ type: Output },],
    };
    return ReactiveFormComponent;
}());
//# sourceMappingURL=reactive-form.component.js.map