import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../form-field.model'

@Component({
  selector: 'tw-multiselect',
  template: `
  <div [formGroup]='group'>
   <button style='margin-top: -30px; margin-bottom: 5px;' [ngClass]="allSelected ? 'btn-primary' : 'btn-default'" class='btn-sm btn pull-right' (click)='selectAll()' > {{field.more.allText || 'All'}}</button>
   <select multiple [formControlName]='field.id' name='{{field.id}}' class='form-control' [(ngModel)]="request[field.id]">
      <option [ngValue]="option[field.optionValue]" *ngFor="let option of field.options">
        {{option[field.optionText]}}
      </option>
    </select>
</div>
  `
})
export class MultiSelectComponent implements OnInit {
  @Input() group: FormGroup
  @Input() field: FormField
  @Input() request: any

  ngOnInit(): void {
    if (!this.field.more)
      this.field.more = {}
  }


  get allSelected(): boolean {
    return this.testSelected()
  }


  selectAll(): void {
    if (this.testSelected())
      this.request[this.field.id] = []
    else {
      this.request[this.field.id] = []

      this.field.options.forEach((option: any) => {
        this.request[this.field.id].push(option[this.field.optionValue])
      });
    }
  }

  private testSelected(): boolean {
    if (!this.request[this.field.id] || !this.field.options)
      return false

    if (this.request[this.field.id].length === this.field.options.length)
      return true

    if (this.request[this.field.id].size === this.field.options.length)
      return true

    return false
  }



}
