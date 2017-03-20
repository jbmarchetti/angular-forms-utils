import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'tw-enumselect',
  templateUrl: './enumselect.component.html',
  styleUrls: ['./enumselect.component.scss']
})
export class EnumselectComponent {

  @Input() group: FormGroup
  @Input() field: any
  @Input() request: any

  private enumToArray(enumObj: any): string[] {
    return Object.keys(enumObj).slice(Object.keys(enumObj).length / 2)
  }
}
