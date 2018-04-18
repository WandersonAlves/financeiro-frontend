import { Injectable, EventEmitter } from '@angular/core';
import { ICurrentRouteBanner } from '../../interfaces/common.interface';

export class EventObservableService {
    public routeChange$: EventEmitter<ICurrentRouteBanner>;

    constructor() {
        this.routeChange$ = new EventEmitter();
    }

    emitRouteChange(routeBanner: ICurrentRouteBanner) {
        this.routeChange$.emit(routeBanner)
    }

}