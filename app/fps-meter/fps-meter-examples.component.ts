import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../link";

let menuLinks = [
    new Link("FPS Meter usage", "/fps-meter/fps-meter-usage")
];

@Component({
    selector: "fps-examples-component",
    templateUrl: "../examples-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FpsExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];
        menuLinks.forEach(link => this.links.push(link));
    }
}
