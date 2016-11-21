// >> textfield-binding-show-result
import { Component } from "@angular/core";

@Component({
    selector: "text-field-binding-component",
    styleUrls: ["../text-field.style.css"],
    templateUrl: "./text-field-binding.component.html"
})
export class TextFieldBindingComponent {
    public showAlert(result) {
        alert("Text: " + result);
    }

    submit(result) {
        alert("Text: " + result);
    }
}
// << textfield-binding-show-result
