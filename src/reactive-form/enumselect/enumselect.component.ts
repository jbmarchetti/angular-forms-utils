import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../form-field.model'

@Component({
  selector: 'tw-enumselect',
  template: `
  <div [formGroup]='group'>
  <select [attr.multiple]='field.type === "enumselect"?null:true' [formControlName]='field.id' name='{{field.id}}' class='form-control' [(ngModel)]="request[field.id]">
      <option [ngValue]="field.firstValue.value" *ngIf='field.firstValue' >{{field.firstValue.text | translate}}</option>
      <option [ngValue]="option" *ngFor="let option of enumToArray(field.options)">
        {{option}}
      </option>
    </select>
</div>
  `
})
export class EnumselectComponent {

  @Input() group: FormGroup
  @Input() field: FormField
  @Input() request: any

  public enumToArray(enumObj: any): string[] {
    return Object.keys(enumObj).slice(Object.keys(enumObj).length / 2)
  }
}
