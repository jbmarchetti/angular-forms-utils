import { Component, Input, TemplateRef } from '@angular/core';
import { TreeviewItem } from 'ng2-dropdown-treeview';
// import { TreeviewItemTemplateContext } from 'ng2-dropdown-treeview/src/treeview-item-template-context';

@Component({
    selector: 'tw-treeview-item',
    template: `
<div class="treeview-item">
    <template [ngTemplateOutlet]="template"
        [ngOutletContext]="{item: item, toggleCollapseExpand: toggleCollapseExpand}">
    </template>
    <div *ngIf="!item.collapsed">
        <tw-treeview-item *ngFor="let child of item.children" [item]="child" [template]="template">
        </tw-treeview-item>
    </div>
</div>
    `,
    styles: [`
:host {
    display: block;
}
:host /deep/ .fa {
    margin-right: .2rem;
    width: .5rem;
    cursor: pointer;
}
.treeview-item {
    white-space: nowrap;
}
.treeview-item .treeview-item {
    margin-left: 2rem;
}
    `]
})

export class TreeViewItemComponent {

    @Input() template: TemplateRef<any>;
    @Input() item: TreeviewItem;

    toggleCollapseExpand = () => {
        this.item.collapsed = !this.item.collapsed;
    }
}
