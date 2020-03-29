
import { IBucketHandler } from "../apis/handlers/bucket/IbucketHandler";


import { Utils } from "../../utils/utils";
import { BucketHandler } from "../apis/handlers/bucket/bucketHandler";

import { IHttpRequestHandler } from "../../restRequestSender/interfaces/IhttpRequestHandler";




export class NifiRegistryApiClient {
    private _bucket : IBucketHandler;
    private _httpRequestSender : IHttpRequestHandler;
    constructor(_httpRequestSender : IHttpRequestHandler) {
        this._httpRequestSender = _httpRequestSender;
    }

    get requestSender() : IHttpRequestHandler{
        return this._httpRequestSender;
    }

    setBucketHandler(bucketHandler : IBucketHandler){
        this._bucket = bucketHandler;
    }

    get bucket() : IBucketHandler {
        if (Utils.isNullOrUndefinded(this._bucket)){
            this._bucket = new BucketHandler(this._httpRequestSender);
        }
        return this._bucket;
    }
}
