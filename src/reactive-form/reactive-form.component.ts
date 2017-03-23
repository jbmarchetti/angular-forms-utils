import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'tw-reactive-form',
  template: `
<form [formGroup]="form">
  <div class="row">
    <div class="form-group col-{{field.col || 'sm-6'}}" [ngClass]="field.class" *ngFor="let field of controlFields">
      <label for="{{field.id}}">{{field.label | translate}} <small *ngIf='field.info'>{{field.info | translate}}</small></label>
      <tw-input-text *ngIf='field.type==="text" || field.type==="number" || field.type==="hidden" || field.type==="email"' [group]='form' [field]='field' [request]='request'></tw-input-text>
      <tw-input-float *ngIf='field.type==="float"' [group]='form' [field]='field' [request]='request'></tw-input-float>
      <tw-select *ngIf='field.type==="select"' [group]='form' [field]='field' [request]='request'></tw-select>
      <tw-enumselect *ngIf='field.type==="enumselect"' [group]='form' [field]='field' [request]='request'></tw-enumselect>
      <tw-datetime-picker *ngIf='field.type==="datetime"' [group]='form' [field]='field' [request]='request'></tw-datetime-picker>
      <tw-time-picker *ngIf='field.type==="time"' [group]='form' [field]='field' [request]='request'></tw-time-picker>
      <tw-switch *ngIf='field.type==="boolean"' [group]='form' [field]='field' [request]='request'></tw-switch>
      <tw-groupselect *ngIf='field.type==="groupselect"' [group]='form' [field]='field' [request]='request'></tw-groupselect>
      <tw-multiselect *ngIf='field.type==="multiselect"' [group]='form' [field]='field' [request]='request'></tw-multiselect>
      <tw-textarea *ngIf='field.type==="textarea"' [group]='form' [field]='field' [request]='request'></tw-textarea>
      <tw-date-picker *ngIf='field.type==="date"' [group]='form' [field]='field' [request]='request'></tw-date-picker>
      <tw-dof *ngIf='field.type==="daysOfWeek"' [group]='form' [field]='field' [request]='request'></tw-dof>
    </div>
  </div>
</form>
  `
})
export class ReactiveFormComponent implements OnInit {

  @Input() fields: any[] = []
  @Input() form: FormGroup; // our model driven form
  @Input() request: any; // our model driven form
  @Output() afterInit: EventEmitter<boolean>

  public submitted: boolean; // keep track on whether form is submitted
  public events: any[] = []; // use later to display form changes

  private controlFields: any[] = []

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

    this.controlFields = this.fields
    this.afterInit.next(true)
  }


}