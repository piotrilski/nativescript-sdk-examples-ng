import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { mockedDataArray } from "../mock-dataItems";
import { ItemEventData } from "ui/list-view";

// >> userprofile-settings-menu-code
@Component({
    selector: "user-settings-menu",
    moduleId: module.id,
    templateUrl: "./user-settings-menu.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSettingsMenuExampleComponent  {
    public countries: ObservableArray<any>;

    ngOnInit() {
        this.countries = new ObservableArray(mockedDataArray);
    }

    public onItemTap(args: ItemEventData) {
        console.log(args.index);
    }
}
// << userprofile-settings-menu-code
