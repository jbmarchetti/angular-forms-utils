import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormField } from './form-field.model';

@Component({
  selector: 'tw-reactive-form',
  template: `
<form [formGroup]="form">
  <div class="row">
    <div class="form-group col-{{field.col || 'sm-6'}}" [ngClass]="field.class" *ngFor="let field of fields">
      <label for="{{field.id}}">{{field.label | translate}} <small *ngIf='field.info'>{{field.info | translate}}</small></label>
      <tw-input-text *ngIf='field.type==="text" || field.type==="number" || field.type==="hidden" || field.type==="email" || field.type==="password"' [group]='form' [field]='field' [request]='request'></tw-input-text>
      <tw-input-float *ngIf='field.type==="float"' [group]='form' [field]='field' [request]='request'></tw-input-float>
      <tw-select *ngIf='field.type==="select"' [group]='form' [field]='field' [request]='request'></tw-select>
      <tw-enumselect *ngIf='field.type==="enumselect" || field.type==="enummultiselect"' [group]='form' [field]='field' [request]='request'></tw-enumselect>
      <tw-datetime-picker *ngIf='field.type==="datetime"' [group]='form' [field]='field' [request]='request'></tw-datetime-picker>
      <tw-time-picker *ngIf='field.type==="time"' [group]='form' [field]='field' [request]='request'></tw-time-picker>
      <tw-switch *ngIf='field.type==="boolean"' [group]='form' [field]='field' [request]='request'></tw-switch>
      <tw-groupselect *ngIf='field.type==="groupselect"' [group]='form' [field]='field' [request]='request'></tw-groupselect>
      <tw-multiselect *ngIf='field.type==="multiselect"' [group]='form' [field]='field' [request]='request'></tw-multiselect>
      <tw-textarea *ngIf='field.type==="textarea"' [group]='form' [field]='field' [request]='request'></tw-textarea>
      <tw-date-picker *ngIf='field.type==="date"' [group]='form' [field]='field' [request]='request'></tw-date-picker>
      <tw-dof *ngIf='field.type==="daysOfWeek"' [group]='form' [field]='field' [request]='request'></tw-dof>
      <tw-treeview-txt *ngIf='field.type==="treeview-txt" || field.type==="dropdown-treeview-txt"' [group]='form' [field]='field' [request]='request'></tw-treeview-txt>
      <tw-treeview *ngIf='field.type==="treeview" || field.type==="dropdown-treeview"' [group]='form' [field]='field' [request]='request'></tw-treeview>
    </div>
  </div>
</form>
  `
})
export class ReactiveFormComponent implements OnInit, AfterViewInit {

  @Input() fields: any[] = []
  @Input() form: FormGroup; // our model driven form
  @Input() request: any; // our model driven form
  @Output() afterInit: EventEmitter<boolean>
  @Output() afterViewInit: EventEmitter<boolean>

  public submitted: boolean; // keep track on whether form is submitted
  public events: any[] = []; // use later to display form changes

  constructor() {
    this.afterInit = new EventEmitter<boolean>(true)
    this.afterViewInit = new EventEmitter<boolean>(true)
  }
  ngOnInit(): void {
    this.fields.forEach((field: FormField) => {
      this.form.addControl(field.id, field.control)
    })
    this.afterInit.next(true)
  }

  ngAfterViewInit(): void {
    this.afterViewInit.next(true)
  }
}