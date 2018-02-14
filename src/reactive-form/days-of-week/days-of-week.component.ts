import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../form-field.model'

@Component({
  selector: 'tw-dof',
  template: `<tw-enumselect [group]='group' [field]='field' [request]='request'></tw-enumselect>`

})
export class DaysOfWeekComponent implements OnInit {
  @Input() group: FormGroup
  @Input() field: FormField
  @Input() request: any

  ngOnInit(): void {
    this.field.options = DaysOfWeekValues
  }

}



export enum DaysOfWeekValues {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}
