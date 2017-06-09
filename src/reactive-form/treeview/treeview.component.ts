import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TreeviewConfig } from 'ng2-dropdown-treeview';
import { FormField } from '../form-field.model'

@Component({
  selector: 'tw-treeview',
  template: `
  <div [formGroup]='group'>
   <leo-treeview *ngIf='field.type==="treeview"' [config]="selectConfig" [items]="field.options" (selectedChange)="updateModel($event)"></leo-treeview>
   <leo-dropdown-treeview *ngIf='field.type==="dropdown-treeview"'  [config]="selectConfig" [items]="field.options" (selectedChange)="updateModel($event)"></leo-dropdown-treeview>
  <input [formControlName]='field.id' name='{{field.id}}' type='hidden' class='form-control' [(ngModel)]="request[field.id]"/>
</div>
  `
})
export class TreeViewComponent implements OnInit {

  @Input() group: FormGroup
  @Input() field: FormField
  @Input() request: any

  public selectConfig: TreeviewConfig = {
    isShowAllCheckBox: true,
    isShowFilter: true,
    isShowCollapseExpand: true,
    maxHeight: 500
  }

  public updateModel(values?: any[]): void {
    if (values)
      this.field.setValue(values)
    else
      this.field.setValue([])
  }

  ngOnInit(): void {
    if (this.field.more && this.field.more.selectConfig)
      this.selectConfig = this.field.more.selectConfig
  }
}
