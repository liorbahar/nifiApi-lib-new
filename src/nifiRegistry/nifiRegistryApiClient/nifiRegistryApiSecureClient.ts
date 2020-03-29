import { INifiRegistryApiSecureConnection } from "../nifiRegistryRequestSedner/secure/INifiRegistryApiSecureConnection";
import { NifiRegistryApiClient } from "./nifiRegistryApiClient";
import { IHttpRequestHandler } from "../../restRequestSender/interfaces/IhttpRequestHandler";
import { INifiRegistryAccessHandler } from "../apis/handlers/access/InifiRegistryAccessHandler";
import { Utils } from "../../utils/utils";
import { NifiRegistryAccessHandler } from "../apis/handlers/access/nifiRegistryAccessHandler";

export class NifiApiRegistrySecureClient extends NifiRegistryApiClient{
    private _accessHandler : INifiRegistryAccessHandler;
    constructor(httpRequestSender : IHttpRequestHandler) {
        super(httpRequestSender);
    }

    get access() : INifiRegistryAccessHandler {
        if (Utils.isNullOrUndefinded(this._accessHandler)){
            this._accessHandler = new NifiRegistryAccessHandler(this.requestSender);
        }
        return this._accessHandler;
    }


    setAccessHandler(accessHandler : INifiRegistryAccessHandler){
        this._accessHandler = accessHandler;

    }
}


