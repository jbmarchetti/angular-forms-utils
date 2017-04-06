import { OnInit, Component, Input } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment'
import { FormField } from '../form-field.model'

@Component({
  selector: 'tw-time-picker',
  template: `
  <div [formGroup]='group'>
  <input [formControlName]='field.id' name='{{field.id}}' [viewFormat]= "'HH:mm'"  [returnObject] = "'string'"  [(ngModel)]="request[field.id]" [(dateTimePicker)]="request[field.id]"  [locale]=" field.more.locale ||'en' " [mode]="field.more.mode ||'dropdown'" [pickerType]="'time'" [theme]="field.more.theme ||'default'" readonly/>
</div>
  `
})
export class TimePickerComponent implements OnInit {
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
            this.request[this.field.id] = '00:00'
            break
          case 'endOfDay':
            this.request[this.field.id] = '23:59'
            break
          default:
            this.request[this.field.id] = this.field.more.defaultValue
            break
        }
      }
    }
    else {
      this.field.more = {}
    }
    this.field.addValidator(Validators.pattern(/^(00|0[0-9]|1[0-9]|2[0-3]):(0[0-9]|[0-5][0-9])(:([0-9]|[0-5][0-9]))?$/))


  }


}
