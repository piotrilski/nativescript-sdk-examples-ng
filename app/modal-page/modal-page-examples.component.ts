import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../link";

let menuLinks = [
    new Link("Modal page example", "/modal-page/sample-modal-page")
];

@Component({
    selector: "modal-page-component",
    moduleId: module.id,
    templateUrl: "../examples-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ModalPageExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];
        menuLinks.forEach(link => this.links.push(link));
    }
}
