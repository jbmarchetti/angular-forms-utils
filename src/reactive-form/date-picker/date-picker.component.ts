import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs'
import * as moment from 'moment'
import { FormField } from '../form-field.model'

@Component({
  selector: 'tw-date-picker',
  template: `
  <div [formGroup]='group'>
   <input [formControlName]='field.id' name='{{field.id}}'  class='form-control' ng2-datetime-picker
      close-on-select="false" date-only="true" />
  <small class='text-danger' *ngIf='field.control.value && field.control.invalid'>Invalid Format : YYYY-MM-DD</small>
</div>
  `
})
export class DatePickerComponent implements OnInit, OnDestroy {

  @Input() group: FormGroup
  @Input() field: FormField
  @Input() request: any

  private sub: Subscription

  ngOnInit(): void {
    this.field.addValidator(Validators.pattern(/^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$/))
    this.sub = this.field.control.valueChanges.subscribe(value => {
      if (value)
        this.request[this.field.id] = moment(value).format('YYYY-MM-DD')
    });
  }

  ngOnDestroy(): void {
    if (this.sub)
      this.sub.unsubscribe()
  }
}
