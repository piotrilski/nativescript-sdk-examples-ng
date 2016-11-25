import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";

platformNativeScriptDynamic().bootstrapModule(AppModule);

// import { platformNativeScript } from "nativescript-angular/platform-static";
// import { AppModuleNgFactory } from "./app.module.ngfactory";

// platformNativeScript().bootstrapModuleFactory(AppModuleNgFactory);
