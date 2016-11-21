// >> switch-event-handle-code
import { Component } from "@angular/core";

@Component({
    selector: "basic-switch-component",
    templateUrl: "./basic-switch.component.html",
    styleUrls: ["../switch.style.css"],
})
export class BasicSwitchComponent {
    public firstSwitchOn = false;
    public secondSwitchOn = true;

    public firstSwitchState = "off";
    public secondSwitchState = "on";

    public FirstCheckChange(result) {
        if (result) {
            this.firstSwitchState = "on";
        } else {
            this.firstSwitchState = "off";
        }
    }

    public SecondCheckChange(result) {
        if (result) {
            this.secondSwitchState = "on";
        } else {
            this.secondSwitchState = "off";
        }
    }
}
// << switch-event-handle-code
