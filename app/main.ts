// this import should be first in order to load some required settings (like globals and reflect-metadata)
// >> ngmodule-config
// >> (hide)

let track = (name: string) => {
    let current = Date.now();
    console.log("Duration of " + name + ": " + (current - start));
    start = current;
}

let start = Date.now();

import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
track("nativescript-angular/platform");

import { routes, routableComponents, examplePipes } from "./app.routes";
track("./app.routes");

import { AppComponent } from "./app.component";
track("AppComponent");

import { NgModule } from "@angular/core";
track("NgModule");

import { NativeScriptRouterModule } from "nativescript-angular/router";
track("NativeScriptRouterModule");

import { NativeScriptFormsModule } from "nativescript-angular/forms";
track("NativeScriptFormsModule");

// << (hide)
import {ModalDialogService} from "nativescript-angular/modal-dialog";
track("ModalDialogService");
// >> (hide)

import { IfAndroidDirective, IfIosDirective } from "./ui-category/ng-directives/create-custom-directive/create-custom-directive.component"
track("./ui-category/ng-directives/create-custom-directive/create-custom-directive.component");

import { UnlessDirective } from "./ui-category/ng-directives/unless-directive/directive-unless"
track("UnlessDirective");

import { ToggleNavButtonDirective } from "./directives/toggle-nav-button.directive"
track("ToggleNavButtonDirective");

import { ExampleTitleDirective } from "./directives/example.directive"
track("ExampleTitleDirective");

import { ItemComponent } from "./ui-category/listview/using-item-template/using-item-template.component";
track("ItemComponent");

// << (hide)
import {registerElement} from 'nativescript-angular/element-registry';
track("registerElement");

import { ModalViewComponent } from "./modal-page/sample-modal-page-module-example/modal-view";
track("ModalViewComponent");

import {TnsGoogleMaps} from "nativescript-googlemaps"
track("TnsGoogleMaps");

import {isIOS} from "platform"
track("isIOS");


track("NgModule...");

@NgModule({
    declarations: [
        // >> (hide)
        ItemComponent,
        AppComponent,
        IfAndroidDirective,
        IfIosDirective,
        UnlessDirective,
        ToggleNavButtonDirective,
        ExampleTitleDirective,
        ...routableComponents,
        // << (hide)
        ModalViewComponent,
        ...examplePipes
    ],
    // >> (hide)
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
    ],
    // << (hide)
    providers:[ModalDialogService],
    entryComponents: [ModalViewComponent]
})
// << ngmodule-config
class AppComponentModule { }

registerElement("TnsGoogleMaps", () => TnsGoogleMaps);

if (isIOS) {
    GMSServices.provideAPIKey("AIzaSyDQZOuoz1x-bMki_pbb7AYyU9D8Js4ZpKQ");
}
track("NgModule!");

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
track("AppComponentModule");
