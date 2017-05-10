import { OnInit, Component, Input } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment'
import { FormField } from '../form-field.model'

@Component({
  selector: 'tw-time-picker',
  template: `
  <div [formGroup]='group'>
    <input [formControlName]='field.id' name='{{field.id}}' class='form-control' ngui-datetime-picker default-value='{{defaultValue}}' [close-on-select]="field.more.closeOnSelect || false"  (ngModelChange)='modelChange($event)'  [(ngModel)]="model"  [time-only]="true" date-format='HH:mm' parse-format='HH:mm'  readonly/>
  </div>
  `
})
export class TimePickerComponent implements OnInit {
  // <small class='text-danger' *ngIf='field.control.value && field.control.invalid'>Invalid Format : YYYY-MM-DD HH:MM</small>
  @Input() group: FormGroup
  @Input() field: FormField
  @Input() request: any

  defaultValue: string = ''
  model: Date

  ngOnInit(): void {

    if (this.field.more) {
      if (this.field.more.defaultValue) {
        switch (this.field.more.defaultValue) {
          case 'startOfDay':
            this.defaultValue = '00:00'
            break
          case 'endOfDay':
            this.defaultValue = '23:59'
            break
          default:
            this.defaultValue = this.field.more.defaultValue
            break
        }
      }
    } else {
      this.field.more = {}
    }
    this.field.addValidator(Validators.pattern(/^(00|0[0-9]|1[0-9]|2[0-3]):(0[0-9]|[0-5][0-9])(:([0-9]|[0-5][0-9]))?$/))


  }

  modelChange(date: Date) {
    if (date)
      this.request[this.field.id] = date.toString()
  }
}
