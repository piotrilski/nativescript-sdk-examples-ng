// >> download-file-service
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable as RxObservable } from "rxjs/Rx";

import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

@Injectable()
export class SaveDownloadedFileService {
    private serverUrl = "https://httpbin.org/robots.txt";

    constructor(private http: Http) { }

    getData() {
        let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl, { headers: headers })
            .map(res => res.text());
    }

    private createRequestHeader() {
        let headers = new Headers();
        // set headers here e.g.
        headers.append("Content-Type", "text/plain");
        return headers;
    }
}
// << download-file-service
