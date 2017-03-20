import { EventEmitter, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class ReactiveFormComponent implements OnInit {
    fields: any[];
    form: FormGroup;
    request: any;
    afterInit: EventEmitter<boolean>;
    submitted: boolean;
    events: any[];
    constructor();
    ngOnInit(): void;
}
