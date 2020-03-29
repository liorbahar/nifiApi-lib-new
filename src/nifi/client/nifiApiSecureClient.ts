import { NifiApiClient } from "./nifiApiClient";
import { INifiAccessHandler } from "../apis/handlers/access/InifiAcessHandler";
import { IHttpRequestHandler } from "../../restRequestSender/interfaces/IhttpRequestHandler";
import { Utils } from "../../utils/utils";
import { NifiAccessHandler } from "../apis/handlers/access/accessHandler";




export class NifiApiSecureClient extends NifiApiClient{
    private _accessHandler : INifiAccessHandler ;
    constructor(nifiRequestSender : IHttpRequestHandler) {
        super(nifiRequestSender);
        
    }
    
    setAccessHandler(acessHandler : INifiAccessHandler){
        this._accessHandler = acessHandler;
    }

    get access() : INifiAccessHandler {
        if (Utils.isNullOrUndefinded(this._accessHandler)){
            this._accessHandler = new NifiAccessHandler(this.requestSender);
        }
        return this._accessHandler;
    }
}


