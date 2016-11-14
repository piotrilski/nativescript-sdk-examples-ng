//declare var __startCPUProfiler;
//declare var __stopCPUProfiler;
//console.log(`>>> __startCPUProfiler("AppComponent");`);
//__startCPUProfiler("AppComponent");

import { Component } from "@angular/core";
import { enableProdMode } from "@angular/core";
enableProdMode();

let track = (name: string) => {
    let current = Date.now();
    let elapsedTime = current - start;
    if (elapsedTime > 100){
        console.log(`>>> ${name}: ${elapsedTime} ms`);
    }
    start = current;
}

let start = Date.now();

@Component({
    selector: "my-app",
    template: "<page-router-outlet></page-router-outlet>",
})

export class AppComponent {
    constructor() {
        track("AppComponentConstructor");
        //console.log(`>>> __stopCPUProfiler("AppComponent");`);
        //__stopCPUProfiler("AppComponent");
    }
}
