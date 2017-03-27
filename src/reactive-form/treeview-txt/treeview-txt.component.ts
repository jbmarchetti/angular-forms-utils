import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs'
import * as moment from 'moment'
import { FormField } from '../form-field.model'

@Component({
  selector: 'tw-treeview-txt',
  template: `
  <div [formGroup]='group'>
   <leo-treeview *ngIf='field.type==="treeview-txt"' id="treeview_{{field.id}}" [config]="selectConfig" [items]="field.options" (selectedChange)="updateModel($event)"></leo-treeview>
   <leo-dropdown-treeview *ngIf='field.type==="dropdown-treeview-txt"' id="treeview_{{field.id}}" [config]="selectConfig" [items]="field.options" (selectedChange)="updateModel($event)"></leo-dropdown-treeview>
    <input [formControlName]='field.id' name='{{field.id}}' type='hidden' class='form-control' [(ngModel)]="request[field.id]"/>
</div>
  `
})
export class TreeViewTxtComponent {

  @Input() group: FormGroup
  @Input() field: FormField
  @Input() request: any

  public selectConfig: any = {
    isShowAllCheckBox: true,
    isShowFilter: true,
    isShowCollapseExpand: false
  }

  public updateModel(values?: any[]): void {
    if (values)
      this.field.setValue(values.join(','))
    else
      this.field.setValue('')
  }
}
