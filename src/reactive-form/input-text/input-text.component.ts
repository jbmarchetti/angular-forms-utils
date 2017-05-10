import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../form-field.model'

@Component({
  selector: 'tw-input-text',
  template: `
   <div [formGroup]='group'>
  <input [formControlName]='field.id' name='{{field.id}}' type='{{field.type}}' class='form-control' (ngModelChange)='modelChange($event)' [(ngModel)]="request[field.id]" 
    [attr.readonly]='field.readonly' />
</div>
   `

})
export class InputTextComponent {
  @Input() group: FormGroup
  @Input() field: FormField
  @Input() request: any

  modelChange(value: string): void {
    if (this.field.more && this.field.more.nullable && value === '')
      this.request[this.field.id] = null
  }
}
