// >> download-file-component
import { Component } from "@angular/core";
import { SaveDownloadedFileService } from "./save-file.services";
import * as fs from "file-system";

@Component({
    moduleId: module.id,
    templateUrl: "./save-file.component.html",
    providers: [SaveDownloadedFileService]
})
export class SaveDownloadedFileComponent {
    public message: string = "";
    public content: string = "";
    public destination: string = "";

    constructor(private downloadService: SaveDownloadedFileService) { };

    onDownload() {
        this.downloadService.getData()
            .subscribe(
            (result) => this.onGetDataSuccess(result),
            (error) => this.onGetDataError(error)
            );
    }

    private onGetDataSuccess(result) {
        let file: fs.File;
        let fileName = "robots.txt";
        let documentsFolder = fs.knownFolders.documents();
        let destinationPath = fs.path.join(documentsFolder.path, fileName);

        file = fs.File.fromPath(destinationPath);

        file.writeText(result).then(() => {
            this.message = "File robots.txt saved!";
            this.content = result;
            this.destination = destinationPath;
        });
    }

    private onGetDataError(error: Response | any) {
        const body = error.json() || "";
        const err = body.error || JSON.stringify(body);
        console.log("onGetDataError: " + err);
    }
}
// << download-file-component
