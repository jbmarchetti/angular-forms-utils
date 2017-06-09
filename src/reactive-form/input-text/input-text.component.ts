import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../form-field.model'

@Component({
  selector: 'tw-input-text',
  template: `
   <div [formGroup]='group' [ngClass]='field.more?.nullable ? "input-group" :""'>
  <input [formControlName]='field.id' name='{{field.id}}' type='{{field.type}}' class='form-control' [(ngModel)]="request[field.id]" 
    [readonly]='field.more?.readonly' />
          <span class="input-group-btn" *ngIf='field.more?.nullable && field.type!=="hidden"'>
        <button class='btn btn-default' (click)='clear()'>&times;</button>
      </span>
</div>
   `

})
export class InputTextComponent {
  @Input() group: FormGroup
  @Input() field: FormField
  @Input() request: any


  clear(): void {
    this.request[this.field.id] = null
  }
}
