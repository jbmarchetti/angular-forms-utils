import { OnInit, Component, Input, OnDestroy } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

// import { Subscription } from 'rxjs'
import * as moment from 'moment'
import { FormField } from '../form-field.model'

@Component({
  selector: 'tw-datetime-picker',
  template: `
  <div [formGroup]='group'>
  <input [formControlName]='field.id' name='{{field.id}}' class='form-control' ngui-datetime-picker default-value='{{defaultValue}}' close-on-select="false" [(ngModel)]="request[field.id]" />
  <small class='text-danger' *ngIf='field.control.value && field.control.invalid'>Invalid Format : YYYY-MM-DD HH:MM</small>
</div>
  `
})
export class DatetimePickerComponent implements OnInit, OnDestroy {

  @Input() group: FormGroup
  @Input() field: FormField
  @Input() request: any

  defaultValue: string = ''
  minute: string = ''
  // private sub: Subscription

  ngOnInit(): void {
    this.field.addValidator(Validators.pattern(/^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (00|0[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9])$/))
    if (this.field.more && this.field.more.defaultValue) {
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
    // this.sub = this.field.control.valueChanges.subscribe(value => {
    //   if (value)
    //     this.request[this.field.id] = moment(value).format()
    // });
  }

  ngOnDestroy(): void {
    // if (this.sub)
    //   this.sub.unsubscribe()
  }
}
