import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'tw-select',
  template: `
  <div [formGroup]='group'>
  <select [formControlName]='field.id' name='{{field.id}}' class='form-control' [(ngModel)]="request[field.id]">
      <option [ngValue]="field.firstValue.value " *ngIf='field.firstValue' >{{field.firstValue.text | translate}}</option>
      <option [ngValue]="option[field.optionValue] " *ngFor="let option of field.options ">
        {{option[field.optionText]}}
      </option>
    </select>
</div>
  `
})
export class SelectComponent {
  @Input() group: FormGroup
  @Input() field: any
  @Input() request: any
}
