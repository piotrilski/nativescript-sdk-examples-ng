
import { Component } from "@angular/core";
import { fruits } from "./fruits";

// >> ngfor-bind-items-code 
@Component({
    selector: 'ngfor-component',
    templateUrl: './repeat-items.component.html',
})

export class NgForRepeatItemsComponent {
    public fruitList:Array<string> = [];

    constructor(){
        this.fruitList = fruits;
    }
}
// << ngfor-bind-items-code       
