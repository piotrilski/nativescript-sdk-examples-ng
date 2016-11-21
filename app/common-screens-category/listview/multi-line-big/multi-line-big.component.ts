// >> multi-line-big-code
import { Component, ChangeDetectionStrategy, OnInit }  from "@angular/core";
import { ItemEventData } from "ui/list-view";
import { SetupItemViewArgs } from "nativescript-angular/directives";
import { mockedDataArray, mockedGroupDataArray, Country }  from "../mock-dataItems";

@Component({
    selector: "multi-line-big-listview",
    templateUrl: "./multi-line-big.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiLineBigListViewExampleComponent implements OnInit {
    public countries: Array<Country> = [];

    public groupedCountries: Array<any> = [];

    ngOnInit() {
        mockedDataArray.forEach(item => this.countries.push(item));
        mockedGroupDataArray.forEach(item => this.groupedCountries.push(item));
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

    checkType(value) {
        // get the class name e.g. GroupTitle or Country
        let className = value.constructor.name;
        return className;
    }
}
// << multi-line-big-code
