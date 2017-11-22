import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TreeviewConfig, TreeviewSelection, TreeviewComponent, TreeviewItem } from 'ngx-treeview';
import { FormField } from '../form-field.model'

@Component({
  selector: 'tw-treeview-txt',
  template: `
  <div [formGroup]='group'>
   <ngx-treeview #treeview *ngIf='field.type==="treeview-txt"' id="treeview_{{field.id}}" [config]="selectConfig" [items]="field.options" (selectedChange)="updateModel($event)"></ngx-treeview>
   <ngx-dropdown-treeview *ngIf='field.type==="dropdown-treeview-txt"' id="treeview_{{field.id}}" [config]="selectConfig" [items]="field.options" (selectedChange)="updateModel($event)"></ngx-dropdown-treeview>
    <input [formControlName]='field.id' name='{{field.id}}' type='hidden' class='form-control' [(ngModel)]="request[field.id]"/>
</div>
  `
})
export class TreeViewTxtComponent implements OnInit {

  @Input() group: FormGroup
  @Input() field: FormField
  @Input() request: any
  @ViewChild(TreeviewComponent) treeviewComponent: TreeviewComponent

  public selectConfig: TreeviewConfig = TreeviewConfig.create({
    hasAllCheckBox: true,
    hasFilter: true,
    hasCollapseExpand: true,
    decoupleChildFromParent: false,
    maxHeight: 500
  })



  private checkItem(item: TreeviewItem): any[] {
    let selection: TreeviewSelection = item.getSelection();
    let values: any[] = []

    if (item.children) {
      if (selection.uncheckedItems.length === 0)
        values.push(item.value)

      for (const child of item.children)
        values = values.concat(this.checkItem(child))

    }
    return values
  }




  public updateModel(values?: any[]): void {

    /*Select Parent*/
    if (this.treeviewComponent) {
      for (const item of this.treeviewComponent.items) {
        values = values.concat(this.checkItem(item))
      }
    }

    if (values)
      this.field.setValue(values.join(','))
    else
      this.field.setValue('')
  }
  ngOnInit(): void {
    if (this.field.more && this.field.more.selectConfig)
      this.selectConfig = this.field.more.selectConfig
  }
}
