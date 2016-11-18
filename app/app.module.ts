// this import should be first in order to load some required settings (like globals and reflect-metadata)
// >> ngmodule-config
// >> (hide)
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { routes } from "./app.routes";
import { AppComponent } from "./app.component";
// << (hide)
import { NsModuleFactoryLoader } from "./ns-module-factory-loader";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { registerElement } from "nativescript-angular/element-registry";
import { ModalViewComponent } from "./modal-page/sample-modal-page-module-example/modal-view";
import { TnsGoogleMaps } from "nativescript-googlemaps";
import { isIOS } from "platform";

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [
        AppComponent,
        // << (hide)
        ModalViewComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
    ],
    providers: [
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
