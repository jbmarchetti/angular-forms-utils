import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../form-field.model'

@Component({
  selector: 'tw-textarea',
  template: `
  <div [formGroup]='group'>
   <textarea [formControlName]='field.id' name='{{field.id}}' class='form-control' [(ngModel)]="request[field.id]"></textarea>
</div>
  `
})
export class TextAreaComponent {
  @Input() group: FormGroup
  @Input() field: FormField
  @Input() request: any
}
