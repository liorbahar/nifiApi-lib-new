import { IProcessGroupsHandler } from "../../apis/handlers/processGroups/IprocessGroupsHandler";import { IHttpNifiRequestHandler } from "../../nifiRequestSedner/genericHttpRequestHandler/IhttpNifiRequestHandler";import { INifiApiConnection } from "../../nifiRequestSedner/nonSecure/INifiApiConnection";import { HttpNifiRequestHandler } from "../../nifiRequestSedner/genericHttpRequestHandler/httpNifiRequestHandler";import { Utils } from "../../../utils/utils";import { ProcessGroupHandler } from "../../apis/handlers/processGroups/prosessGroupHandler";
import { ITemplateApiHandler } from "../../apis/handlers/templates/ItemplateApiHandler";
import { TemplateApiHandler } from "../../apis/handlers/templates/templateApiHandler";
import { INifiApiClient } from "./InifiApiClient";


export class NifiApiClient implements INifiApiClient {
    private _processGroupHandler : IProcessGroupsHandler;
    private _templateHandler : ITemplateApiHandler;
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

    setTemplateApiHandler(templateApiHandler : ITemplateApiHandler){
        this._templateHandler = templateApiHandler;
    }

    get template() : ITemplateApiHandler {
        if (Utils.isNullOrUndefinded(this._templateHandler)){
            this._templateHandler = new TemplateApiHandler(this.requestSender);
        }
        return this._templateHandler;
    }
}
