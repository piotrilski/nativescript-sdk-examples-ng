import { PreloadingStrategy, Route } from "@angular/router";
import { _throw } from "rxjs/observable/throw";
import { _catch } from "rxjs/operator/catch";
import { Observable } from "rxjs";

import * as utils from "utils/utils";
import {isAndroid, isIOS} from "platform";

declare var interop, NSPostWhenIdle;

let requestIdleFrame: (callback: () => void) => void;
if (isAndroid) {
    console.log("TODO: requestIdleFrame for Android");
    requestIdleFrame = cb => cb();
} else if (isIOS) {
    const queue = [];

    class TNSIdleHandler extends NSObject {
        public static ObjCExposedMethods = {
            "receiveIdleNotification": { returns: interop.types.void, params: [] }
        };
        receiveIdleNotification() {
            idleNotificationPosted = false;
            // console.log("Idle! handle something from the idle queue!");
            try {
                queue.shift()();
            } catch(e) {
                console.log("Error executing on idle frame: " + e);
                console.log(e.stack);
            }
            if (queue.length > 0) {
                postIdleNotification();
            } else {
                console.log("idle frames drained");
            }
        }
    }

    const target = TNSIdleHandler.alloc().init();
    utils.ios.getter(NSNotificationCenter, NSNotificationCenter.defaultCenter).addObserverSelectorNameObject(target, "receiveIdleNotification", "org.nativescript.idle-notification", null);
    const idleNotification = NSNotification.notificationWithNameObject("org.nativescript.idle-notification", target);
    let idleNotificationPosted: boolean = false;

    let postIdleNotification = () => {
        utils.ios.getter(NSNotificationQueue, NSNotificationQueue.defaultQueue).enqueueNotificationPostingStyle(idleNotification, NSPostWhenIdle);
        idleNotificationPosted = true;
    }

    requestIdleFrame = callback => {
        queue.push(callback);
        if (!idleNotificationPosted) {
            console.log("enqueued idle frames");
            postIdleNotification();
        }
    }
}

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
            var start = Date.now();
            load();
            this.loadedPaths.push(route.path);
            var end = Date.now();
            console.log(msg + " in " + (end - start));
        });

        return observable;
    }
}
