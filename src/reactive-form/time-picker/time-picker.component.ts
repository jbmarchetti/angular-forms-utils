import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs'
import { FormField } from '../form-field.model'

@Component({
  selector: 'tw-time-picker',
  template: `
<div [formGroup]='group'>
  <input [formControlName]='field.id' name='{{field.id}}' class='form-control' date-format='HH:mm' parse-format='HH:mm' time-only="true"
    ngui-datetime-picker close-on-select="false" [(ngModel)]="request[field.id]"/>
  <small class='text-danger' *ngIf='field.control.value && field.control.invalid'>Invalid Format : HH:MM</small>
</div>
  `
})
export class TimePickerComponent implements OnInit, OnDestroy {
  @Input() group: FormGroup
  @Input() field: FormField
  @Input() request: any

  private sub: Subscription

  ngOnInit(): void {
    this.field.addValidator(Validators.pattern(/^(00|0[0-9]|1[0-9]|2[0-3]):(0[0-9]|[0-5][0-9])(:([0-9]|[0-5][0-9]))?$/))
    // this.field.setValue(this.request[this.field.id])

    // this.sub = this.field.control.valueChanges.subscribe(value => {
    //   if (value)
    //     this.request[this.field.id] = value
    // });
  }

  ngOnDestroy(): void {
    if (this.sub)
      this.sub.unsubscribe()
  }
}
