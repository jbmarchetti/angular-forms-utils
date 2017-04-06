import { OnInit, Component, Input, OnDestroy } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment'
import { FormField } from '../form-field.model'

@Component({
  selector: 'tw-datetime-picker',
  template: `
  <div [formGroup]='group'>
  <input [formControlName]='field.id' name='{{field.id}}'  [ngModel]="request[field.id] | date: field.more.dateFormat || 'yyyy-MM-dd HH:mm'" [dateTimePicker]="defaultValue" (dateTimePickerChange)="request[field.id] = $event" [locale]=" field.more.locale ||'en' " [mode]="field.more.mode ||'dropdown'" [pickerType]="field.more.pickerType ||'both'" [theme]="field.more.theme ||'default'" readonly/>
</div>
  `
})
export class DatetimePickerComponent implements OnInit {
  // <small class='text-danger' *ngIf='field.control.value && field.control.invalid'>Invalid Format : YYYY-MM-DD HH:MM</small>
  @Input() group: FormGroup
  @Input() field: FormField
  @Input() request: any

  defaultValue: string = ''
  minute: string = ''
  // private sub: Subscription
  closeOnSelect: boolean = false

  ngOnInit(): void {

    if (this.field.more) {
      if (this.field.more.defaultValue) {
        switch (this.field.more.defaultValue) {
          case 'startOfDay':
            this.defaultValue = moment().startOf('day').format('YYYY-MM-DD HH:mm')
            break
          case 'endOfDay':
            this.defaultValue = moment().endOf('day').format('YYYY-MM-DD HH:mm')
            break
          default:
            this.defaultValue = this.field.more.defaultValue
            break
        }
      }
    }
    else {
      this.field.more = {}
    }

    switch (this.field.more.pickerType) {
      case 'date':
        this.field.addValidator(Validators.pattern(/^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$/))
        break;
      case 'both': default:
        this.field.addValidator(Validators.pattern(/^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (00|0[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9])$/))
        break;
    }

  }


}
