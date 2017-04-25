import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { TreeviewConfig } from 'ng2-dropdown-treeview';
import { TreeviewItem } from 'ng2-dropdown-treeview';

import { Subscription } from 'rxjs'
import * as moment from 'moment'
import { FormField } from '../form-field.model'

@Component({
  selector: 'tw-treeview-radio',
  template: `
<template #tpl let-item="item"
    let-toggleCollapseExpand="toggleCollapseExpand"
    let-onCheckedChange="onCheckedChange">
    <div class="form-check" [formGroup]='group'>
        <i *ngIf="item.children" (click)="toggleCollapseExpand()" aria-hidden="true"
            class="fa" [class.fa-caret-right]="item.collapsed" [class.fa-caret-down]="!item.collapsed"></i>
        <label class="form-check-label">
            <input type="radio"  class="form-check-input"
                [(ngModel)]="request[field.id]" [formControlName]='field.id'  name='{{field.id}}' value='{{item.value}}' [disabled]="item.disabled" />
            {{item.text}}
        </label>
    </div>
</template>
<div class="treeview-header">
    <div *ngIf="hasFilterItems">
        <div *ngIf="selectConfig.isShowAllCheckBox || selectConfig.isShowCollapseExpand" class="row">
            <div class="col-12" [class.row-margin]="selectConfig.isShowFilter && (selectConfig.isShowAllCheckBox || selectConfig.isShowCollapseExpand)">
                <label *ngIf="selectConfig.isShowCollapseExpand" class="pull-right label-collapse-expand" (click)="toggleCollapseExpand()">
                    <i [title]="i18n.tooltipCollapseExpand(allItem.collapsed)" aria-hidden="true"
                        class="fa" [class.fa-expand]="allItem.collapsed" [class.fa-compress]="!allItem.collapsed"></i>
                </label>
            </div>
        </div>
        <div *ngIf="selectConfig.isShowFilter || selectConfig.isShowAllCheckBox || selectConfig.isShowCollapseExpand" class="divider"></div>
    </div>
</div>
<div class="treeview-container" [style.max-height.px]="maxHeight" >
    <div *ngFor="let item of field.options">
        <tw-treeview-item [item]="item" [template]="template || tpl" >
        </tw-treeview-item>
    </div>
</div>
`,
  styles: [`
.row-margin {
    margin-top: .3rem;
}
.label-item-all {
}
.label-collapse-expand {
    margin: 0;
    padding: 0 .3rem;
    cursor: pointer;
}
.divider {
    height: 1px;
    margin: 0.5rem 0;
    overflow: hidden;
    background: #000;
}
.treeview-container {
    overflow-x: hidden;
    overflow-y: auto;
    padding-right: 18px;
}
.treeview-text {
    padding: .3rem 0;
    white-space: nowrap;
}
`]
})
export class TreeViewRadioComponent implements OnInit {

  @Input() group: FormGroup
  @Input() field: FormField
  @Input() request: any
  allItem: TreeviewItem;

  public selectConfig: TreeviewConfig = {
    isShowAllCheckBox: true,
    isShowFilter: true,
    isShowCollapseExpand: true,
    maxHeight: 500
  }

  toggleCollapseExpand(): void {
    this.allItem.collapsed = !this.allItem.collapsed;
    // if (!_.isNil(this.filterItems)) {
    this.field.options.items.forEach((item: TreeviewItem) => item.setCollapsedRecursive(this.allItem.collapsed));
    // }
  }



  public updateModel(values?: any[]): void {
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
