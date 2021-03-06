import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../form-field.model'

@Component({
  selector: 'tw-select-t',
  template: `
  <div [formGroup]='group'>
  <select [formControlName]='field.id' name='{{field.id}}' class='form-control' [(ngModel)]="request[field.id]">
      <option [ngValue]="field.firstValue.value" *ngIf='field.firstValue' >{{field.firstValue.text | translate}}</option>
      <option [ngValue]="option[field.optionValue]" *ngFor="let option of field.options ">
        {{option[field.optionText] | translate}}
      </option>
    </select>
</div>
  `
})
export class SelectTComponent {
  @Input() group: FormGroup
  @Input() field: FormField
  @Input() request: any
}
