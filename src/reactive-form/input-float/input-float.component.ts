import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs'

@Component({
  selector: 'tw-input-float',
  templateUrl: './input-float.component.html',
  styleUrls: ['./input-float.component.scss']
})
export class InputFloatComponent implements OnInit, OnDestroy {
  @Input() group: FormGroup
  @Input() field: any
  @Input() request: any
  private sub: Subscription

  ngOnInit(): void {
    let validators: any[] = []
    if (this.field.control.validator)
      validators.push(this.field.control.validator)

    validators.push(Validators.pattern(/^[+-]?([0-9]*[.])?[0-9]+$/))

    this.field.control.setValidators(validators)
    this.sub = this.field.control.valueChanges.subscribe((value: string) => {
      this.request[this.field.id] = parseFloat(value)
    });
  }

  ngOnDestroy(): void {
    if (this.sub)
      this.sub.unsubscribe()
  }
}