import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'rf-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  @Input() group: FormGroup
  @Input() field: any
  @Input() request: any
  constructor() { }

  ngOnInit() {
  }

}
