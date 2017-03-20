import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'rf-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() group: FormGroup
  @Input() field: any
  @Input() request: any

  constructor() { }

  ngOnInit() {
  }

}
