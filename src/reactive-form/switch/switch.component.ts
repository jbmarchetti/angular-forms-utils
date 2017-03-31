import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../form-field.model'

@Component({
  selector: 'tw-switch',
  template: `
  <div [formGroup]='group'>
  <label class="switch switch-icon switch-pill switch-primary-outline-alt">
        <input type="checkbox" [formControlName]='field.id' class="switch-input"  [(ngModel)]="request[field.id]" >
        <span class="switch-label" data-on="yes" data-off="no"></span>
        <span class="switch-handle"></span>
    </label>
</div>
  `
})
export class SwitchComponent {
  @Input() group: FormGroup
  @Input() field: FormField
  @Input() request: any
}
