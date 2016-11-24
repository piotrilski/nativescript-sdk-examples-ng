import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { ItemEventData } from "ui/list-view";
import { mockedGroupDataArray }  from "../mock-dataItems";

// >> grouped-single-listview-basic-code
@Component({
    selector: "grouped-single-line-listview",
    moduleId: module.id,
    templateUrl: "./grouped-single-line.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupedSingleLineListViewExampleComponent implements OnInit {
    public countries: Array<any> = [];

    ngOnInit() {
        mockedGroupDataArray.forEach(item => this.countries.push(item));
    }

    checkType(value) {
        // get the class name e.g. GroupTitle or Country
        let className = value.constructor.name;
        return className;
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
// << grouped-single-listview-basic-code
