import { Component, Input, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../form-field.model'
import { Subscription } from 'rxjs'
// import * as jQuery from 'jquery'
import { DaterangePickerComponent } from 'ng2-daterangepicker';


import * as moment_ from 'moment';
const moment = moment_;

@Component({
  selector: 'tw-datetime-picker',
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
  <input #datepicker class='form-control' type="text" [formControlName]='field.id' name='{{field.id}}' id='{{field.id}}' daterangepicker [options]="options" (selected)="selectedDate($event, daterange)" (showDaterangepicker)="showDaterangepicker($event)"  readonly/>
  <span class="input-group-btn">
  <button class='btn btn-default' (click)='clear()'>&times;</button>
  </span>
  </div>`

})
export class DatetimePickerComponent implements OnInit, OnDestroy {
  // <small class='text-danger' *ngIf='field.control.value && field.control.invalid'>Invalid Format : YYYY-MM-DD HH:MM</small>
  @Input() group: FormGroup
  @Input() field: FormField
  @Input() request: any

  @ViewChild('datepicker') datepicker: ElementRef;
  @ViewChild(DaterangePickerComponent) datepickerComponent: DaterangePickerComponent;

  public daterange: any = {};

  defaultValue: any
  minute: string = ''

  options: any
  firstShow = true

  private sub: Subscription

  selectedDate(value: any, datepicker?: any) {
    if (!this.field.more.dateOnly)
      this.request[this.field.id] = value.start
    else
      this.request[this.field.id] = value.start.hours(12)
    this.datepicker.nativeElement.value = value.start.format(this.field.more.dateFormat || "YYYY-MM-DD HH:mm")
    this.field.control.setValue(this.datepicker.nativeElement.value)
  }

  showDaterangepicker(ev: any) {

    if (this.firstShow)
      this.selectedDate({ start: this.defaultValue })

    this.firstShow = false
  }


  ngOnInit(): void {
    this.datepicker.nativeElement = this.datepicker.nativeElement
    if (this.field.more) {
      if (this.field.more.defaultValue) {
        switch (this.field.more.defaultValue) {
          case 'startOfDay':
            this.defaultValue = moment().startOf('day')
            break
          case 'endOfDay':
            this.defaultValue = moment().endOf('day')
            break
          default:
            this.defaultValue = this.field.more.defaultValue
            break
        }
      } else {
        this.defaultValue = moment()
      }

    } else {
      this.field.more = {}
    }

    if (this.request[this.field.id]) {
      let v: any = moment(this.request[this.field.id])
      this.defaultValue = v
      this.field.control.setValue(v.format(this.field.more.dateFormat || "YYYY-MM-DD HH:mm"))
    }
    // if (this.field.more.dateOnly)
    // this.field.addValidator(Validators.pattern(/^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$/))
    // else
    // this.field.addValidator(Validators.pattern(/^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (00|0[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9])$/))

    this.options = {
      singleDatePicker: true,
      timePicker: !this.field.more.dateOnly,
      autoApply: true,
      timePicker24Hour: true,
      autoUpdateInput: false,
      startDate: this.defaultValue
    };

    if (this.field.more.options)
      for (let i in this.field.more.options)
        this.options[i] = this.field.more.options[i]


    this.sub = this.field.valueChange.subscribe((v: any) => {
      this.datepickerComponent.render();
      this.datepickerComponent.selected.next({ start: v });
      this.datepickerComponent.datePicker.setStartDate(v);
    })
  }

  // valueChanged(date: Date): void {
  //   if (this.field.more.dateOnly && date)
  //     this.request[this.field.id] = date.toString()
  // }


  clear(): void {
    this.request[this.field.id] = null
    this.datepicker.nativeElement.value = ''
    this.field.control.setValue('')
  }

  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe()
  }

}
