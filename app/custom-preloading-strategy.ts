import * as app from "application";

import { PreloadingStrategy, Route } from "@angular/router";
import { _throw } from "rxjs/observable/throw";
import { _catch } from "rxjs/operator/catch";
import { Observable } from "rxjs";

import { requestIdleFrame } from "nativescript-idle";

export class Preload implements PreloadingStrategy {
    private loadedPaths: string[];
    private queue: { route: Route, load: Function, observable: Observable<any> }[];
    private intervalKey: number;

    constructor() {
        this.loadedPaths = [];
        this.queue = [];
    }

    preload(route: Route, load: Function): Observable<any> {
        if (this.loadedPaths.indexOf(route.path) > -1) {
            return Observable.of(null);
        }
        let observable = Observable.of(null);

        requestIdleFrame(() => {
            var msg = "preloading " + route.path;
            console.log(msg);
            var start = Date.now();
            load();
            this.loadedPaths.push(route.path);
            var end = Date.now();
            console.log(msg + " in " + (end - start));
        });

        return observable;
    }
}
