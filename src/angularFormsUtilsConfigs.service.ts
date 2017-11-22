import { Injectable } from '@angular/core';
import { DaterangepickerConfig } from 'ng2-daterangepicker';

@Injectable()
export class AngularFormsUtilsConfigs {

    constructor(public daterangepickerConfig: DaterangepickerConfig) {
    }

}