import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs'
import { FormField } from '../form-field.model'

@Component({
  selector: 'tw-input-float',
  template: `
  <div [formGroup]='group'>
    <input [formControlName]='field.id' name='{{field.id}}' type='text' class='form-control' [attr.readonly]='field.readonly' />
  </div>`
})
export class InputFloatComponent implements OnInit, OnDestroy {
  @Input() group: FormGroup
  @Input() field: FormField
  @Input() request: any
  private sub: Subscription

  ngOnInit(): void {
    this.field.addValidator(Validators.pattern(/^[+-]?([0-9]*[.])?[0-9]+$/))
    this.sub = this.field.control.valueChanges.subscribe((value: string) => {
      this.request[this.field.id] = parseFloat(value)
    });
  }

  ngOnDestroy(): void {
    if (this.sub)
      this.sub.unsubscribe()
  }
}