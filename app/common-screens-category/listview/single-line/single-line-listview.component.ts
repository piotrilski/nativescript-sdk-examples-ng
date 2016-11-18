import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { ItemEventData } from "ui/list-view";
import { mockedDataArray, Country }  from "../mock-dataItems";

// >> ext-listview-basic-code
@Component({
    selector: "single-line-listview",
    moduleId: module.id,
    templateUrl: "./single-line-listview.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleLineListViewExampleComponent implements OnInit {
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
}
// << ext-listview-basic-code
