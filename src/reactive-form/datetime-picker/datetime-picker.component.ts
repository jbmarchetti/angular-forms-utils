import { AfterContentInit, Component, Input, OnDestroy } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs'
import * as moment from 'moment'

@Component({
  selector: 'tw-datetime-picker',
  template: `
  <div [formGroup]='group'>
  <input [formControlName]='field.id' name='{{field.id}}' class='form-control' ng2-datetime-picker close-on-select="false"
  />
  <small class='text-danger' *ngIf='field.control.value && field.control.invalid'>Invalid Format : YYYY-MM-DD HH:MM</small>
</div>
  `
})
export class DatetimePickerComponent implements AfterContentInit, OnDestroy {

  @Input() group: FormGroup
  @Input() field: any
  @Input() request: any

  private sub: Subscription

  ngAfterContentInit(): void {
    let validators: any[] = []
    if (this.field.control && this.field.control.validator)
      validators.push(this.field.control.validator)

    validators.push(Validators.pattern(/^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (00|[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9])$/))

    this.field.control.setValidators(validators)

    this.sub = this.field.control.valueChanges.subscribe(value => {
      if (value)
        this.request[this.field.id] = moment(value).format()
    });
  }

  ngOnDestroy(): void {
    if (this.sub)
      this.sub.unsubscribe()
  }
}
