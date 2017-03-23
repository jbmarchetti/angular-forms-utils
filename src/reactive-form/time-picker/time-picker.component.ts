import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs'

@Component({
  selector: 'tw-time-picker',
  template: `
<div [formGroup]='group'>
  <input [formControlName]='field.id' name='{{field.id}}' class='form-control' date-format='HH:mm' parse-format='HH:mm' time-only="true"
    ng2-datetime-picker close-on-select="false" />
  <small class='text-danger' *ngIf='field.control.value && field.control.invalid'>Invalid Format : HH:MM</small>
</div>
  `
})
export class TimePickerComponent implements OnInit, OnDestroy {
  @Input() group: FormGroup
  @Input() field: any
  @Input() request: any

  private sub: Subscription

  ngOnInit(): void {
    let validators: any[] = []
    if (this.field.control.validator)
      validators.push(this.field.control.validator)

    validators.push(Validators.pattern(/^(00|0[0-9]|1[0-9]|2[0-3]):(0[0-9]|[0-5][0-9])(:([0-9]|[0-5][0-9]))?$/))

    this.field.control.setValidators(validators)

    this.field.control.setValue(this.request[this.field.id])

    this.sub = this.field.control.valueChanges.subscribe(value => {
      if (value)
        this.request[this.field.id] = value
    });
  }

  ngOnDestroy(): void {
    if (this.sub)
      this.sub.unsubscribe()
  }
}
