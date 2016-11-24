import { PreloadingStrategy, Route } from "@angular/router";
import { _throw } from "rxjs/observable/throw";
import { _catch } from "rxjs/operator/catch";
import { Observable } from "rxjs";

export class Preload implements PreloadingStrategy {
    private loadedPaths: string[];

    constructor() {
        this.loadedPaths = [];
    }

    preload(route: Route, load: Function): Observable<any> {
        if (route.path.indexOf("gestures") !== -1) {
            console.log("trigger preload for " + route.path);
        }

        if (this.loadedPaths.indexOf(route.path) > -1) {
            return Observable.of(null);
        }

        setTimeout(() => {
            if (route.path.indexOf("gestures") !== -1) {
                console.log("loading... " + route.path);
            }

            load();

            if (route.path.indexOf("gestures") !== -1) {
                console.log("path loaded..." + route.path);
            };

            this.loadedPaths.push(route.path);
        }, 2000);

        return Observable.of(null);
        // return _catch.call(load(), () => Observable.of(null));
    }
}
