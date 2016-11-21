import { Component, ChangeDetectionStrategy } from "@angular/core";
import {ObservableArray} from "data/observable-array";
import {mockedDataArray} from "../mock-dataItems";

// >> userprofile-user-feed-code
@Component({
    selector: "user-feed",
    templateUrl: "./user-feed.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFeedExampleComponent  {
    public countries: ObservableArray<any>;

    constructor() {
        this.countries = new ObservableArray(mockedDataArray);
    }

    public onItemTapFirstList(args) {
        console.log(args.index);
    }

    public onItemTapSecondList(args) {
        console.log(args.index);
    }

    public onItemTapThirdList(args) {
        console.log(args.index);
    }

    public followTap() {
        console.log("follow button");
    }
}
// << userprofile-user-feed-code
