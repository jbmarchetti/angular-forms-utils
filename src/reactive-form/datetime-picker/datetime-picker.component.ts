import { OnInit, Component, Input, OnDestroy } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment'
import { FormField } from '../form-field.model'

@Component({
  selector: 'tw-datetime-picker',
  template: `
  <div [formGroup]='group' class="input-group">
      <input [formControlName]='field.id' name='{{field.id}}' class='form-control' (valueChanged)='valueChanged($event)' ngui-datetime-picker default-value='{{defaultValue}}' [close-on-select]="field.more.closeOnSelect || false" [(ngModel)]="request[field.id]" [date-only]="field.more.dateOnly ||false" [date-format]='this.field.more.dateFormat || "YYYY-MM-DD HH:mm"' [parse-format]='this.field.more.dateFormat || "YYYY-MM-DD HH:mm"'  readonly/>
      <span class="input-group-btn">
        <button class='btn btn-default' (click)='clear()'>&times;</button>
      </span>
</div>
  `
})
export class DatetimePickerComponent implements OnInit {
  // <small class='text-danger' *ngIf='field.control.value && field.control.invalid'>Invalid Format : YYYY-MM-DD HH:MM</small>
  @Input() group: FormGroup
  @Input() field: FormField
  @Input() request: any

  defaultValue: Date
  minute: string = ''


  ngOnInit(): void {
    if (this.field.more) {
      if (this.field.more.defaultValue) {
        switch (this.field.more.defaultValue) {
          case 'startOfDay':
            let date: Date = new Date()
            date.setHours(0)
            date.setMinutes(0)
            this.defaultValue = date
            break
          case 'endOfDay':
            let date2: Date = new Date()
            date2.setHours(23)
            date2.setMinutes(59)
            this.defaultValue = date2
            break
          default:
            this.defaultValue = this.field.more.defaultValue
            break
        }
      }
    } else {
      this.field.more = {}
    }

    if (this.field.more.dateOnly)
      this.field.addValidator(Validators.pattern(/^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$/))
    else
      this.field.addValidator(Validators.pattern(/^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (00|0[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9])$/))


  }

  valueChanged(date: Date): void {
    if (this.field.more.dateOnly && date)
      this.request[this.field.id] = date.toString()
  }


  clear(): void {
    this.request[this.field.id] = null
  }

}
