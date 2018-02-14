import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../form-field.model'
import * as moment from 'moment';

@Component({
  selector: 'tw-daterange-picker',
  //   template: `
  //   <div [formGroup]='group' class="input-group">
  //       <input [formControlName]='field.id' name='{{field.id}}' class='form-control' (valueChanged)='valueChanged($event)' ngui-datetime-picker default-value='{{defaultValue}}' [close-on-select]="field.more.closeOnSelect || false" [(ngModel)]="request[field.id]" [date-only]="field.more.dateOnly ||false" [date-format]='this.field.more.dateFormat || "YYYY-MM-DD HH:mm"' [parse-format]='this.field.more.dateFormat || "YYYY-MM-DD HH:mm"'  readonly/>
  //       <span class="input-group-btn">
  //         <button class='btn btn-default' (click)='clear()'>&times;</button>
  //       </span>
  // </div>
  //   `
  template: `
  <div [formGroup]='group' class="input-group">
  <input #datepicker class='form-control' type="text" [formControlName]='field.id' name='{{field.id}}' daterangepicker [options]="options" (selected)="selectedDate($event, daterange)"  (showDaterangepicker)="showDaterangepicker($event)" readonly/>
  <span class="input-group-btn">
  <button class='btn btn-default' (click)='clear()'>&times;</button>
  </span>
  </div>`

})
export class DateRangePickerComponent implements OnInit {
  // <small class='text-danger' *ngIf='field.control.value && field.control.invalid'>Invalid Format : YYYY-MM-DD HH:MM</small>
  @Input() group: FormGroup
  @Input() field: FormField
  @Input() request: any

  @ViewChild('datepicker') datepicker: ElementRef;

  defaultValue1: any
  defaultValue2: any
  minute: string = ''

  options: any

  firstShow = true


  selectedDate(value: any, datepicker?: any) {
    if (!this.field.more.dateOnly) {
      this.request[this.field.more.model1] = value.start
      this.request[this.field.more.model2] = value.end
    }
    else {
      this.request[this.field.more.model1] = value.start.hours(12)
      this.request[this.field.more.model2] = value.end.hours(12)
    }
    this.datepicker.nativeElement.value = value.start.format(this.field.more.dateFormat || "YYYY-MM-DD HH:mm") + ' - ' + value.end.format(this.field.more.dateFormat || "YYYY-MM-DD HH:mm")
    this.field.control.setValue(this.datepicker.nativeElement.value)
  }


  showDaterangepicker(ev: any) {
    if (this.firstShow)
      this.selectedDate({ start: this.defaultValue1, end: this.defaultValue2 })

    this.firstShow = false
  }


  ngOnInit(): void {
    this.datepicker.nativeElement = this.datepicker.nativeElement
    if (this.field.more) {
      if (this.field.more.defaultValue1) {
        switch (this.field.more.defaultValue1) {
          case 'startOfDay':
            this.defaultValue1 = moment().startOf('day')
            break
          case 'endOfDay':
            this.defaultValue1 = moment().endOf('day')
            break
          default:
            this.defaultValue1 = this.field.more.defaultValue1
            break
        }
      } else {
        this.defaultValue1 = moment()
      }
      if (this.field.more.defaultValue2) {
        switch (this.field.more.defaultValue2) {
          case 'startOfDay':
            this.defaultValue2 = moment().startOf('day')
            break
          case 'endOfDay':
            this.defaultValue2 = moment().endOf('day')
            break
          default:
            this.defaultValue2 = this.field.more.defaultValue2
            break
        }
      } else {
        this.defaultValue2 = moment()
      }
    } else {
      this.field.more = {}
    }

    if (this.request[this.field.more.model1]) {
      let v: moment.Moment = moment(this.request[this.field.more.model1])
      this.defaultValue1 = v
    }

    if (this.request[this.field.more.model2]) {
      let v: moment.Moment = moment(this.request[this.field.more.model2])
      this.defaultValue2 = v
    }

    if (this.request[this.field.more.model1] && this.request[this.field.more.model2])
      this.field.control.setValue(this.defaultValue1.format(this.field.more.dateFormat || "YYYY-MM-DD HH:mm") + ' - ' + this.defaultValue2.format(this.field.more.dateFormat || "YYYY-MM-DD HH:mm"))


    // if (this.field.more.dateOnly)
    // this.field.addValidator(Validators.pattern(/^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$/))
    // else
    // this.field.addValidator(Validators.pattern(/^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (00|0[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9])$/))

    this.options = {
      timePicker: !this.field.more.dateOnly,
      timePicker24Hour: true,
      autoUpdateInput: false,
      autoApply: true,
      startDate: this.defaultValue1,
      endDate: this.defaultValue2
    };

    if (this.field.more.options)
      for (let i in this.field.more.options)
        this.options[i] = this.field.more.options[i]

  }

  // valueChanged(date: Date): void {
  //   if (this.field.more.dateOnly && date)
  //     this.request[this.field.id] = date.toString()
  // }


  clear(): void {
    this.request[this.field.more.model1] = null
    this.request[this.field.more.model2] = null
    this.datepicker.nativeElement.value = ''
    this.field.control.setValue('')
  }

}
