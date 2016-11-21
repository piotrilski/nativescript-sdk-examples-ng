import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../link";

let menuLinks = [
    new Link("Platform module example", "/platform/platform-module")
];

@Component({
    selector: "platform-examples-component",
    templateUrl: "../examples-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlatformExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];
        menuLinks.forEach(link => this.links.push(link));
    }
}
