
import { IProcessGroupsHandler } from "../apis/handlers/processGroups/IprocessGroupsHandler";
import { Utils } from "../../utils/utils";
import { ProcessGroupHandler } from "../apis/handlers/processGroups/prosessGroupHandler";
import { INifiApiConnection } from "../nifiRequestSedner/nonSecure/INifiApiConnection";
import { IHttpNifiRequestHandler } from "../nifiRequestSedner/genericHttpRequestHandler/IhttpNifiRequestHandler";
import { HttpNifiRequestHandler } from "../nifiRequestSedner/genericHttpRequestHandler/httpNifiRequestHandler";


export class NifiApiClient {
    private _processGroupHandler : IProcessGroupsHandler;
    private _requestSender : IHttpNifiRequestHandler; 
    constructor(nifi_conn : INifiApiConnection) {
        this._requestSender = new HttpNifiRequestHandler(nifi_conn);
    }

    get requestSender() : IHttpNifiRequestHandler{
        return this._requestSender; 
    }

    setProssesGroupHandler(prossGroupHandler : IProcessGroupsHandler){
        this._processGroupHandler = prossGroupHandler;
    }

    get processGroup() : IProcessGroupsHandler {
        if (Utils.isNullOrUndefinded(this._processGroupHandler)){
            this._processGroupHandler = new ProcessGroupHandler(this.requestSender);
        }
        return this._processGroupHandler;
    }
}
