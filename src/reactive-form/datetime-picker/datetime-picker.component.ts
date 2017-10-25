import { OnInit, ViewChild, ElementRef, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../form-field.model'
import * as moment from 'moment'

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
  <input #datepicker class='form-control' type="text" [formControlName]='field.id' name='{{field.id}}' daterangepicker [options]="options" (selected)="selectedDate($event, daterange)" (showDaterangepicker)="showDaterangepicker($event)"  readonly/>
  <span class="input-group-btn">
  <button class='btn btn-default' (click)='clear()'>&times;</button>
  </span>
  </div>`

})
export class DatetimePickerComponent implements OnInit {
  // <small class='text-danger' *ngIf='field.control.value && field.control.invalid'>Invalid Format : YYYY-MM-DD HH:MM</small>
  @Input() group: FormGroup
  @Input() field: FormField
  @Input() request: any

  @ViewChild('datepicker') datepicker: ElementRef;

  defaultValue: any
  minute: string = ''

  options: any
  firstShow = true

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

}
