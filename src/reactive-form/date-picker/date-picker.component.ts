import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs'
import * as moment from 'moment'
import { FormField } from '../form-field.model'

@Component({
  selector: 'tw-date-picker',
  template: `
  <div [formGroup]='group'>
   <input [formControlName]='field.id' name='{{field.id}}' default-value='{{defaultValue}}' class='form-control' ngui-datetime-picker
      close-on-select="false" date-only="true" [(ngModel)]="request[field.id]"/>
  <small class='text-danger' *ngIf='field.control.value && field.control.invalid'>Invalid Format : YYYY-MM-DD</small>
</div>
  `
})
export class DatePickerComponent implements OnInit, OnDestroy {

  @Input() group: FormGroup
  @Input() field: FormField
  @Input() request: any
  defaultValue: string = ''

  private sub: Subscription

  ngOnInit(): void {
    this.field.addValidator(Validators.pattern(/^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$/))
    if (this.field.more && this.field.more.defaultValue)
      this.defaultValue = this.field.more.defaultValue
    // this.sub = this.field.control.valueChanges.subscribe(value => {
    //   if (value)
    //     this.request[this.field.id] = moment(value).format('YYYY-MM-DD')
    // });
  }

  ngOnDestroy(): void {
    if (this.sub)
      this.sub.unsubscribe()
  }
}
