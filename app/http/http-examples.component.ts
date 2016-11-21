import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../link";

let menuLinks = [
    new Link("HTTP POST", "/http/http-post"),
    new Link("HTTP GET", "/http/http-get")
];

@Component({
    selector: "http-examples-component",
    templateUrl: "../examples-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class HttpExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];
        menuLinks.forEach(link => this.links.push(link));
    }
}
