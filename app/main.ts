declare var __startCPUProfiler;
//__startCPUProfiler("Beginning_of_main.ts_to_ExamplesListComponent.ngAfterContentInit");

global.__beginningOfTime = Date.now();
global.__lastLog = global.__beginningOfTime;
global.__logTimes = (message: string) => {
    let now = Date.now();
    console.log(`${message} OWN: ${now - global.__lastLog} ms; TOTAL: ${now - global.__beginningOfTime} ms;`);
    global.__lastLog = now;
};

// this import should be first in order to load some required settings (like globals and reflect-metadata)
// >> ngmodule-config
// >> (hide)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
global.__logTimes(`import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";`);
import { routes, routableComponents, examplePipes } from "./app.routes";
global.__logTimes(`import { routes, routableComponents, examplePipes } from "./app.routes";`);
import { AppComponent } from "./app.component";
global.__logTimes(`import { AppComponent } from "./app.component";`);
import { NgModule } from "@angular/core";
global.__logTimes(`import { NgModule } from "@angular/core";`);
import { NativeScriptRouterModule } from "nativescript-angular/router";
global.__logTimes(`import { NativeScriptRouterModule } from "nativescript-angular/router";`);
import { NativeScriptFormsModule } from "nativescript-angular/forms";
global.__logTimes(`import { NativeScriptFormsModule } from "nativescript-angular/forms";`);
// << (hide)
import {ModalDialogService} from "nativescript-angular/modal-dialog";
global.__logTimes(`import {ModalDialogService} from "nativescript-angular/modal-dialog";`);
// >> (hide)
import { IfAndroidDirective, IfIosDirective } from "./ui-category/ng-directives/create-custom-directive/create-custom-directive.component"
global.__logTimes(`import { IfAndroidDirective, IfIosDirective } from "./ui-category/ng-directives/create-custom-directive/create-custom-directive.component"`);
import { UnlessDirective } from "./ui-category/ng-directives/unless-directive/directive-unless"
global.__logTimes(`import { UnlessDirective } from "./ui-category/ng-directives/unless-directive/directive-unless"`);
import { ToggleNavButtonDirective } from "./directives/toggle-nav-button.directive"
global.__logTimes(`import { ToggleNavButtonDirective } from "./directives/toggle-nav-button.directive"`);
import { ExampleTitleDirective } from "./directives/example.directive"
global.__logTimes(`import { ExampleTitleDirective } from "./directives/example.directive"`);
import { ItemComponent } from "./ui-category/listview/using-item-template/using-item-template.component";
global.__logTimes(`import { ItemComponent } from "./ui-category/listview/using-item-template/using-item-template.component";`);
// << (hide)
import {registerElement} from 'nativescript-angular/element-registry';
global.__logTimes(`import {registerElement} from 'nativescript-angular/element-registry';`);
import { ModalViewComponent } from "./modal-page/sample-modal-page-module-example/modal-view";
global.__logTimes(`import { ModalViewComponent } from "./modal-page/sample-modal-page-module-example/modal-view";`);
import {TnsGoogleMaps} from "nativescript-googlemaps"
global.__logTimes(`import {TnsGoogleMaps} from "nativescript-googlemaps"`);
import {isIOS} from "platform"
global.__logTimes(`import {isIOS} from "platform"`);

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
global.__logTimes(`class AppComponentModule { }`);

registerElement("TnsGoogleMaps", () => TnsGoogleMaps);
global.__logTimes(`registerElement("TnsGoogleMaps", () => TnsGoogleMaps);`);

if (isIOS) {
    GMSServices.provideAPIKey("AIzaSyDQZOuoz1x-bMki_pbb7AYyU9D8Js4ZpKQ");
    global.__logTimes(`GMSServices.provideAPIKey("AIzaSyDQZOuoz1x-bMki_pbb7AYyU9D8Js4ZpKQ");`);
}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
global.__logTimes(`platformNativeScriptDynamic().bootstrapModule(AppComponentModule);`);
