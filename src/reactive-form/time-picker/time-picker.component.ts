import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
// import { Subscription } from 'rxjs'
import { FormField } from '../form-field.model'

@Component({
  selector: 'tw-time-picker',
  template: `
<div [formGroup]='group'>
  <input [formControlName]='field.id' name='{{field.id}}' class='form-control' default-value='{{defaultValue}}' date-format='HH:mm' parse-format='HH:mm' time-only="true"
    ngui-datetime-picker [close-on-select]="closeOnSelect" [(ngModel)]="request[field.id]"/>
  <small class='text-danger' *ngIf='field.control.value && field.control.invalid'>Invalid Format : HH:MM</small>
</div>
  `
})
export class TimePickerComponent implements OnInit, OnDestroy {
  @Input() group: FormGroup
  @Input() field: FormField
  @Input() request: any

  // private sub: Subscription
  defaultValue: string = ''
  closeOnSelect: boolean = false

  ngOnInit(): void {
    this.field.addValidator(Validators.pattern(/^(00|0[0-9]|1[0-9]|2[0-3]):(0[0-9]|[0-5][0-9])(:([0-9]|[0-5][0-9]))?$/))
    if (this.field.more) {
      if (this.field.more.defaultValue)
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

      if (this.field.more.closeOnSelect)
        this.closeOnSelect = this.field.more.closeOnSelect
    }
    // this.field.setValue(this.request[this.field.id])

    // this.sub = this.field.control.valueChanges.subscribe(value => {
    //   if (value)
    //     this.request[this.field.id] = value
    // });
  }

  ngOnDestroy(): void {
    // if (this.sub)
    //   this.sub.unsubscribe()
  }
}
