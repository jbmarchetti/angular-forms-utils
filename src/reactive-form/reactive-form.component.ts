
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'tw-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  @Input() fields: any[] = []
  @Input() form: FormGroup; // our model driven form
  @Input() request: any; // our model driven form

  @Output() afterInit: EventEmitter<boolean>

  public submitted: boolean; // keep track on whether form is submitted
  public events: any[] = []; // use later to display form changes

  constructor() {
    this.afterInit = new EventEmitter<boolean>(true)
  }
  ngOnInit(): void {

    this.fields.forEach((field: any) => {

      let control: FormControl = new FormControl('')
      if (field.required)
        control.setValidators(<any>Validators.required)

      field.control = control

      this.form.addControl(field.id, control)
    })

    this.afterInit.next(true)
  }


}