import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'rf-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {
  @Input() group: FormGroup
  @Input() field: any
  @Input() request: any
  constructor() { }

  ngOnInit() {
  }

}
