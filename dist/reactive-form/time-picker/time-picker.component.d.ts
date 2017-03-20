import { OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class TimePickerComponent implements OnInit, OnDestroy {
    group: FormGroup;
    field: any;
    request: any;
    private sub;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
