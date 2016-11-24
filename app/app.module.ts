// this import should be first in order to load some required settings (like globals and reflect-metadata)
// >> ngmodule-config
// >> (hide)
import { Preload } from "./custom-preloading-strategy";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { RouterModule, PreloadAllModules, NoPreloading } from "@angular/router";

import { routes } from "./app.routes";
import { AppComponent } from "./app.component";
// << (hide)
import { NsModuleFactoryLoader } from "./ns-module-factory-loader";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { registerElement } from "nativescript-angular/element-registry";
import { ModalViewComponent } from "./modal-page/sample-modal-page-module-example/modal-view";
import { TnsGoogleMaps } from "nativescript-googlemaps";
import { isIOS } from "platform";

import { ExamplesListComponent } from "./examples-list.component";


@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [
        AppComponent,
        // << (hide)
        ModalViewComponent,
        ExamplesListComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        RouterModule.forRoot(routes, {
            preloadingStrategy: Preload
        }),
    ],
    providers: [
        Preload,
        ModalDialogService,
        { provide: NgModuleFactoryLoader, useClass: NsModuleFactoryLoader }
    ],
    entryComponents: [ModalViewComponent]
})
// << ngmodule-config
export class AppModule { }

registerElement("TnsGoogleMaps", () => TnsGoogleMaps);

if (isIOS) {
    GMSServices.provideAPIKey("AIzaSyDQZOuoz1x-bMki_pbb7AYyU9D8Js4ZpKQ");
}
