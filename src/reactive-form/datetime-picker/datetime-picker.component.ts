import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs'
var moment = require('moment')

@Component({
  selector: 'rf-datetime-picker',
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.scss']
})
export class DatetimePickerComponent implements OnInit, OnDestroy {

  @Input() group: FormGroup
  @Input() field: any
  @Input() request: any

  private sub: Subscription
  constructor() { }

  ngOnInit() {
    let validators: any[] = []
    if (this.field.control.validator)
      validators.push(this.field.control.validator)

    validators.push(Validators.pattern(/^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (00|[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9])$/))

    this.field.control.setValidators(validators)

    this.sub = this.field.control.valueChanges.subscribe(value => {
      this.request[this.field.id] = moment(value).format()
    });
  }

  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe()
  }
}
