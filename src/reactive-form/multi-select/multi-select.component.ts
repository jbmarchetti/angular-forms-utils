import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../form-field.model'

@Component({
  selector: 'tw-multiselect',
  template: `
  <div [formGroup]='group'>
   <button style='margin-top: -30px; margin-bottom: 5px;' [ngClass]="allSelected ? 'btn-primary' : 'btn-default'" class='btn-sm btn pull-right' (click)='selectAll()' *ngIf='field.more.all'> {{field.more.allText}}</button>
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
  @Input() field: FormField
  @Input() request: any


  ngOnInit(): void {
    if (!this.field.more)
      this.field.more = {}
  }


  get allSelected(): boolean {
    if (this.request[this.field.id] && this.field.options && (this.request[this.field.id].length === this.field.options.length))
      return true

    return false
  }


  selectAll() {
    if (this.request[this.field.id] && this.request[this.field.id].length === this.field.options.length)
      this.request[this.field.id] = []
    else {
      this.request[this.field.id] = []

      this.field.options.forEach((option: any) => {
        this.request[this.field.id].push(option[this.field.optionValue])
      });
    }
  }


}
