import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'tw-multiselect',
  template: `
  <div [formGroup]='group'>
   <select multiple [formControlName]='field.id' name='{{field.id}}' class='form-control' [(ngModel)]="request[field.id]">
      <option [ngValue]="option[field.optionValue]" *ngFor="let option of field.options">
        {{option[field.optionText]}}
      </option>
    </select>
</div>
  `
})
export class MultiSelectComponent {
  @Input() group: FormGroup
  @Input() field: any
  @Input() request: any
}
