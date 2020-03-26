import { INifiAccessHandler } from "../../apis/handlers/access/InifiAcessHandler";
import { NifiApiClient } from "./nifiApiClient";
import { INifiApiSecureConnection } from "../../nifiRequestSedner/secure/INifiApiSecureConnection";
import { Utils } from "../../../utils/utils";
import { NifiAccessHandler } from "../../apis/handlers/access/accessHandler";


export class NifiApiSecureClient extends NifiApiClient{
    private _accessHandler : INifiAccessHandler ;
    constructor(nifi_conn : INifiApiSecureConnection) {
        super(nifi_conn);
        
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


