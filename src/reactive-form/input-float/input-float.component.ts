import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs'

@Component({
  selector: 'rf-input-float',
  templateUrl: './input-float.component.html',
  styleUrls: ['./input-float.component.scss']
})
export class InputFloatComponent implements OnInit {
  @Input() group: FormGroup
  @Input() field: any
  @Input() request: any
  private sub: Subscription
  constructor() { }

  ngOnInit() {
    let validators: any[] = []
    if (this.field.control.validator)
      validators.push(this.field.control.validator)

    validators.push(Validators.pattern(/^[+-]?([0-9]*[.])?[0-9]+$/))

    this.field.control.setValidators(validators)
    this.sub = this.field.control.valueChanges.subscribe((value: string) => {
      this.request[this.field.id] = parseFloat(value)
    });
  }

  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe()
  }
}