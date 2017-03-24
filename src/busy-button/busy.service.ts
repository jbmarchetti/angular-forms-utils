import { Injectable } from '@angular/core';

@Injectable()
export class BusyService {
    global: boolean = false

    start(): void {
        this.global = true
    }
    stop(): void {
        this.global = false
    }
}
