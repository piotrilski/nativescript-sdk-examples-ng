import { Component } from "@angular/core";
import * as dialogs from "ui/dialogs";

@Component({
    selector: "login-dialog-component",
    templateUrl: "./login-dialog.component.html"
})

export class LoginDialogComponent {
    displayLoginDialog() {
        // >> login-dialog-code
        var options = {
            title: "Login",
            message: "Login",
            username: "john_doe",
            password: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        };
        dialogs.login(options).then((loginResult: dialogs.LoginResult) => {
            console.log(loginResult.result);
        });
        // << login-dialog-code
    }
}
