import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'rf-enumselect',
  templateUrl: './enumselect.component.html',
  styleUrls: ['./enumselect.component.scss']
})
export class EnumselectComponent implements OnInit {

  @Input() group: FormGroup
  @Input() field: any
  @Input() request: any

  constructor() { }

  ngOnInit() {
  }

  private enumToArray(enumObj: any) {
    return Object.keys(enumObj).slice(Object.keys(enumObj).length / 2)
  }
}
