import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

// import { Subscription } from 'rxjs'
import { FormField } from '../form-field.model'

@Component({
  selector: 'tw-date-picker',
  template: `<tw-datetime-picker [group]='group' [field]='field' [request]='request'></tw-datetime-picker>`

})
export class DatePickerComponent implements OnInit, OnDestroy {

  @Input() group: FormGroup
  @Input() field: FormField
  @Input() request: any
  defaultValue: string = ''
  closeOnSelect: boolean = false

  // private sub: Subscription

  ngOnInit(): void {
    if (!this.field.more)
      this.field.more = {}

    this.field.more.pickerType = 'date'
    if (!this.field.more.dateFormat)
      this.field.more.dateFormat = 'yyyy-MM-dd'
  }

  ngOnDestroy(): void {
    // if (this.sub)
    //   this.sub.unsubscribe()
  }
}
