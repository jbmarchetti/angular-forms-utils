import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  @Input() field: any
  @Input() request: any


  get daysOfWeek(): any[] {
    return [
      { val: 'sunday', text: 'sunday' },
      { val: 'monday', text: 'monday' },
      { val: 'tuesday', text: 'tuesday' },
      { val: 'wednesday', text: 'wednesday' },
      { val: 'thursday', text: 'thursday' },
      { val: 'friday', text: 'friday' },
      { val: 'saturday', text: 'saturday' }
    ]

  }

}
