import { ITemplateHandler } from "../apis/handlers/templates/ItemplateHandler";
import { IProcessGroupsHandler } from "../apis/handlers/processGroups/IprocessGroupsHandler";
import { IHttpRequestHandler } from "../../restRequestSender/interfaces/IhttpRequestHandler";
import { TemplateHandler } from "../apis/handlers/templates/templateHandler";
import { Utils } from "../../utils/utils";
import { ProcessGroupHandler } from "../apis/handlers/processGroups/prosessGroupHandler";


export class NifiApiClient {
    private _processGroupHandler : IProcessGroupsHandler;
    private _templateHandler : ITemplateHandler;
    private _requestSender : IHttpRequestHandler; 
    constructor(httpRequestSender : IHttpRequestHandler) {
        this._requestSender = httpRequestSender;
    }

    get requestSender() : IHttpRequestHandler{
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
