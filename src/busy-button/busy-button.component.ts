import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BusyService } from './busy.service';

@Component({
    selector: 'tw-busy-button',
    template: '<button (click)=\'send()\' [class]="cssClass" [disabled]="disabled || busy.global"><span style=\'margin- right:5px\'  *ngIf=\'busy.global\'><img src="assets/img/ajax-loader.gif"/></span><i class=\'fa fa-{{icon }}\' style=\'margin- right:5px\'  *ngIf=\'icon && !busy.global\'></i><ng-content></ng-content></button>'
})
export class BusyButtonComponent {

    @Input() cssClass: string
    @Input() disabled: boolean
    @Input() icon: string
    @Output() onClick: EventEmitter<boolean>

    constructor(public busy: BusyService) {
        this.onClick = new EventEmitter<boolean>(true)
    }

    send(): void {
        this.onClick.next(true)
    }

}
