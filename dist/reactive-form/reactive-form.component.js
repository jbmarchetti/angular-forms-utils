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
                    template: "\n<form [formGroup]=\"form\">\n  <div class=\"row\">\n    <div class=\"form-group col-{{field.col || 'sm-6'}}\" [ngClass]=\"field.class\" *ngFor=\"let field of fields\">\n      <label for=\"{{field.id}}\">{{field.label | translate}} <small *ngIf='field.info'>{{field.info | translate}}</small></label>\n      <tw-input-text *ngIf='field.type===\"text\" || field.type===\"number\" || field.type===\"hidden\" || field.type===\"email\"' [group]='form' [field]='field' [request]='request'></tw-input-text>\n      <tw-input-float *ngIf='field.type===\"float\"' [group]='form' [field]='field' [request]='request'></tw-input-float>\n      <tw-select *ngIf='field.type===\"select\"' [group]='form' [field]='field' [request]='request'></tw-select>\n      <tw-enumselect *ngIf='field.type===\"enumselect\"' [group]='form' [field]='field' [request]='request'></tw-enumselect>\n      <tw-datetime-picker *ngIf='field.type===\"datetime\"' [group]='form' [field]='field' [request]='request'></tw-datetime-picker>\n      <tw-time-picker *ngIf='field.type===\"time\"' [group]='form' [field]='field' [request]='request'></tw-time-picker>\n      <tw-switch *ngIf='field.type===\"boolean\"' [group]='form' [field]='field' [request]='request'></tw-switch>\n      <tw-groupselect *ngIf='field.type===\"groupselect\"' [group]='form' [field]='field' [request]='request'></tw-groupselect>\n      <tw-multiselect *ngIf='field.type===\"multiselect\"' [group]='form' [field]='field' [request]='request'></tw-multiselect>\n      <tw-textarea *ngIf='field.type===\"textarea\"' [group]='form' [field]='field' [request]='request'></tw-textarea>\n      <tw-date-picker *ngIf='field.type===\"date\"' [group]='form' [field]='field' [request]='request'></tw-date-picker>\n      <tw-dof *ngIf='field.type===\"daysOfWeek\"' [group]='form' [field]='field' [request]='request'></tw-dof>\n    </div>\n  </div>\n</form>\n  "
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