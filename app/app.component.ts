import { Component } from "@angular/core";

let track = (name: string) => {
    let current = Date.now();
    console.log("Duration of " + name + ": " + (current - start));
    start = current;
}

let start = Date.now();

@Component({
    selector: "my-app",
    template: "<page-router-outlet></page-router-outlet>",
})

export class AppComponent {
    constructor() {
        track("ctor AppComponent");
    }
}
