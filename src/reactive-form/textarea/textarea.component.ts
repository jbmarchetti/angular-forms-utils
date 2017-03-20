import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  @Input() field: any
  @Input() request: any
}
