import { OnInit, Component, SimpleChanges, Input, OnChanges } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment'
import { FormField } from '../form-field.model'
import { NguiDatetimePickerModule, NguiDatetime } from '@ngui/datetime-picker';


@Component({
  selector: 'tw-time-picker',
  template: `
  <div [formGroup]='group' style='display:none'>
  <input type='hidden'  [formControlName]='field.id' [(ngModel)]="this.request[this.field.id]" />
  </div>
  <div class='clear' >
   <select [(ngModel)]="hour" (ngModelChange)='onChange(true)' class='form-control pull-left' style='width:100px;'>
        <option [ngValue]=""></option>
        <option *ngFor="let h of hours" [ngValue]="h">{{h}}</option>
    </select>
    <span class='pull-left' style='margin:5px'>hh</span>
     <select [(ngModel)]="minute" (ngModelChange)='onChange()'  class='form-control pull-left' style='width:100px;'>
        <option [ngValue]=""></option>
        <option *ngFor="let m of minutes" [ngValue]="m">{{m}}</option>
    </select>
    <span class='pull-left' style='margin:5px'>mm</span>
      <button class='btn btn-default pull-left'  (click)='clear()'>&times;</button>
  </div>
    `
})

// <div [formGroup]='group' class="input-group">
//   <input [formControlName]='field.id' name='{{field.id}}' class='form-control' ngui-datetime-picker default-value='{{defaultValue}}' [close-on-select]="field.more.closeOnSelect || false"  (valueChanged)='valueChanged($event)'  [(ngModel)]="request[field.id]"  [time-only]="true" date-format='HH:mm' parse-format='HH:mm'  readonly/>
//       <span class="input-group-btn">
//       <button class='btn btn-default' (click)='clear()'>&times;</button>
//     </span>
// </div>
export class TimePickerComponent implements OnInit, OnChanges {
  // <small class='text-danger' *ngIf='field.control.value && field.control.invalid'>Invalid Format : YYYY-MM-DD HH:MM</small>
  @Input() group: FormGroup
  @Input() field: FormField
  @Input() request: any

  defaultValue: string = ''

  hours: string[]
  minutes: string[]

  hour: string
  minute: string

  constructor() {
    this.hours = []
    for (let i: number = 0; i <= 23; i++) {
      if (i < 10)
        this.hours.push('0' + i.toString())
      else
        this.hours.push(i.toString())
    }

    this.minutes = []
    for (let i: number = 0; i <= 59; i++) {
      if (i < 10)
        this.minutes.push('0' + i.toString())
      else
        this.minutes.push(i.toString())
    }
  }

  // get model(): string {
  //   return this.request[this.field.id]

  // }

  // set model(m: string) {
  //   console.log(this.hour)
  // }

  onChange(hour?: boolean): void {
    if (hour && !this.minute)
      this.minute = '00'

    if (this.hour && this.minute)
      this.request[this.field.id] = this.hour + ':' + this.minute
    else
      this.request[this.field.id] = null
  }


  ngOnChanges(value: SimpleChanges): void {
    let newV: string = value['request'].currentValue[this.field.id]
    if (newV) {
      let split: string[] = newV.split(':')
      this.hour = split[0] ? split[0] : ''
      this.minute = split[1] ? split[1] : ''
    }

  }

  ngOnInit(): void {

    if (this.field.more) {
      if (this.field.more.defaultValue) {
        // switch (this.field.more.defaultValue) {
        //   case 'startOfDay':
        //     this.defaultValue = '00:00'
        //     break
        //   case 'endOfDay':
        //     this.defaultValue = '23:59'
        //     break
        //   default:
        //     this.defaultValue = this.field.more.defaultValue
        //     break
        // }
      }
    } else {
      this.field.more = {}
    }
    this.field.addValidator(Validators.pattern(/^(00|0[0-9]|1[0-9]|2[0-3]):(0[0-9]|[0-5][0-9])(:([0-9]|[0-5][0-9]))?$/))

  }



  // valueChanged(date: Date): void {
  //   // console.log('time changed')
  //   if (date)
  //     this.request[this.field.id] = date.toString()
  // }


  clear(): void {
    this.hour = ''
    this.minute = ''
    this.request[this.field.id] = null
  }

}
