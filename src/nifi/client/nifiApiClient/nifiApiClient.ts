import { IProcessGroupsHandler } from "../../apis/handlers/processGroups/IprocessGroupsHandler";import { IHttpNifiRequestHandler } from "../../nifiRequestSedner/genericHttpRequestHandler/IhttpNifiRequestHandler";import { INifiApiConnection } from "../../nifiRequestSedner/nonSecure/INifiApiConnection";import { HttpNifiRequestHandler } from "../../nifiRequestSedner/genericHttpRequestHandler/httpNifiRequestHandler";import { Utils } from "../../../utils/utils";import { ProcessGroupHandler } from "../../apis/handlers/processGroups/prosessGroupHandler";

import { INifiApiClient } from "./InifiApiClient";
import { ITemplateHandler } from "../../apis/handlers/templates/ItemplateHandler";
import { TemplateHandler } from "../../apis/handlers/templates/templateHandler";


export class NifiApiClient implements INifiApiClient {
    private _processGroupHandler : IProcessGroupsHandler;
    private _templateHandler : ITemplateHandler;
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

    setTemplateApiHandler(templateApiHandler : ITemplateHandler){
        this._templateHandler = templateApiHandler;
    }

    get template() : ITemplateHandler {
        if (Utils.isNullOrUndefinded(this._templateHandler)){
            this._templateHandler = new TemplateHandler(this.requestSender);
        }
        return this._templateHandler;
    }
}
