import { Component, ChangeDetectionStrategy, OnInit }  from "@angular/core";
import { ItemEventData } from "ui/list-view";
import { SetupItemViewArgs } from "nativescript-angular/directives";
import { mockedDataArray, Country }  from "../mock-dataItems";

// >> multiline-listview-code
@Component({
    selector: "multi-line-listview",
    moduleId: module.id,
    templateUrl: "./multi-line.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiLineListViewExampleComponent implements OnInit {
    public countries: Array<Country> = [];

    ngOnInit() {
        mockedDataArray.forEach(item => this.countries.push(item));
    }

    onItemTapFirstList(args: ItemEventData) {
        console.log(args.index);
    }

    onItemTapSecondList(args: ItemEventData) {
        console.log(args.index);
    }

    onItemTapThirdList(args: ItemEventData) {
        console.log(args.index);
    }

    onSetupItemView(args: SetupItemViewArgs) {
        // further customisation can be achived with SetupItemViewArgs
        // example for creating a variable for each third element
        args.view.context.third = (args.index % 3 === 0);
    }
}
// << multiline-listview-code
