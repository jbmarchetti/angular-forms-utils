import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../form-field.model'

@Component({
  selector: 'tw-dof',
  template: `
  <div [formGroup]='group'>
    <select [formControlName]='field.id' name='{{field.id}}' class='form-control' [(ngModel)]="request[field.id]" >
      <option [ngValue]="option.val" *ngFor="let option of daysOfWeek">
        {{option.text | translate}}
      </option>
    </select>
</div>
  `
})
export class DaysOfWeekComponent {
  @Input() group: FormGroup
  @Input() field: FormField
  @Input() request: any


  get daysOfWeek(): any[] {
    return [
      { val: 'Sunday', text: 'Sunday' },
      { val: 'Monday', text: 'Monday' },
      { val: 'Tuesday', text: 'Tuesday' },
      { val: 'Wednesday', text: 'Wednesday' },
      { val: 'Thursday', text: 'Thursday' },
      { val: 'Friday', text: 'Friday' },
      { val: 'Saturday', text: 'Saturday' }
    ]

  }

}
