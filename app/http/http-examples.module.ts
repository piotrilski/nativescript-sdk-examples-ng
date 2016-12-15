import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { HttpExamplesComponent } from "./http-examples.component";

import { HttpGetComponent } from "./http-get/http-get.component";
import { HttpPostComponent } from "./http-post/http-post.component";
import { SaveDownloadedFileComponent } from "./save-file/save-file.component";

import { TitleAndNavButtonModule } from "../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: HttpExamplesComponent
    },
    {
        path: "http-get",
        component: HttpGetComponent,
        data: { title: "HTTP Get" }
    },
    {
        path: "http-post",
        component: HttpPostComponent,
        data: { title: "HTTP Post" }
    },
    {
        path: "save-file",
        component: SaveDownloadedFileComponent,
        data: { title: "Save File" }
    }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        TitleAndNavButtonModule,
        NativeScriptHttpModule,
        NativeScriptFormsModule,
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [
        HttpExamplesComponent,
        HttpGetComponent,
        HttpPostComponent,
        SaveDownloadedFileComponent
    ]
})

export class HttpExamplesModule {
    constructor() { }
}
