import { PreloadingStrategy, Route } from "@angular/router";
import { _throw } from "rxjs/observable/throw";
import { _catch } from "rxjs/operator/catch";
import { Observable } from "rxjs";

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
        this.loadedPaths.push(route.path);

        console.log("push: " + route.path);
        this.queue.push({ route, load, observable });
        this.start();

        return observable;
        // return _catch.call(load(), () => Observable.of(null));
    }

    private start() {
        if (this.queue.length !== 1) {
            return;
        }

        android.os.Looper.myQueue().addIdleHandler(new android.os.MessageQueue.IdleHandler({
            queueIdle: () => {
                console.log("tick");
                return true;
                // let { load, route } = this.queue.shift(); // tslint:disable-line:no-shadowed-variable
                // let start = Date.now();
                // console.log(`loading... ${route.path}`);

                // load();
                // this.loadedPaths.push(route.path);

                // let end = Date.now();
                // console.log(`path loaded... ${route.path}`);
                // console.log(`Time: ${end - start} ms...`);

                // return this.queue.length > 0;
            }
        }));
    }

    // private start() {
    //     this.intervalKey = this.intervalKey || setInterval(() => this.preload2(), 100);
    //     console.log("intervalKey: " + this.intervalKey);
    // }

    // private stop() {
    //     clearInterval(this.intervalKey);
    // }

    // private preload2() {
    //     console.log(this.queue);
    //     // if (this.queue.length === 0) {
    //     //     this.stop();
    //     //     return;
    //     // }
    //     let { load, route } = this.queue.shift();
    //     let start = Date.now();
    //     console.log(`loading... ${route.path}`);

    //     load();
    //     this.loadedPaths.push(route.path);

    //     let end = Date.now();
    //     console.log(`path loaded... ${route.path}`);
    //     console.log(`Time: ${end - start} ms...`);
    // }
}
