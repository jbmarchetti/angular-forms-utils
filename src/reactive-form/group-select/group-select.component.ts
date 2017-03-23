import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../form-field.model'


@Component({
  selector: 'tw-groupselect',
  template: `
  <div [formGroup]='group'>
  <select [formControlName]='field.id' name='{{field.id}}' class='form-control' [(ngModel)]="request[field.id]" >
        <option [ngValue]="field.firstValue.value " *ngIf='field.firstValue' >{{field.firstValue.text | translate}}</option>
        <optgroup label="{{group.label}}" *ngFor="let group of field.options">
        <option [ngValue]="option[field.optionValue]" *ngFor="let option of group.values">
          {{option[field.optionText]}}
        </option>
      </optgroup>
    </select>
</div>
  `
})
export class GroupSelectComponent {
  @Input() group: FormGroup
  @Input() field: FormField
  @Input() request: any
}
