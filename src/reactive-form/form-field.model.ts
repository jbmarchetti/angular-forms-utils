import { FormControl, ValidatorFn, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';

declare var Object: any

export interface IFormField {
    id: string
    type: string
    label: string
    col: string

    /*For selects*/
    options: any
    optionValue: string
    optionText: string
    firstValue: any

    more: any

}

export class FormField implements IFormField {

    id: string
    type: string
    label: string
    options: any
    optionValue: string
    optionText: string
    col: string
    firstValue: any
    more: any
    nativeElement: any

    control: FormControl

    valueChange: EventEmitter<any>

    constructor(values: IFormField) {
        Object.assign(this, values);
        this.control = new FormControl('')
        this.valueChange = new EventEmitter<any>()
    }

    required(): FormField {
        this.control.setValidators(<any>Validators.required)
        return this
    }

    setValidators(v: ValidatorFn | ValidatorFn[]): FormField {
        this.control.setValidators(v)
        return this
    }

    setValue(v: any): FormField {
        this.control.setValue(v)
        this.valueChange.next(v)
        return this
    }

    addValidator(v: ValidatorFn): FormField {
        let validators: any[] = []
        if (this.control.validator)
            validators.push(this.control.validator)

        validators.push(v)
        this.control.setValidators(validators)
        return this
    }


}