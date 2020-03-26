import { IProcessGroupsHandler } from "../../apis/handlers/processGroups/IprocessGroupsHandler";
import { IHttpNifiRequestHandler } from "../../nifiRequestSedner/genericHttpRequestHandler/IhttpNifiRequestHandler";
import { ITemplateApiHandler } from "../../apis/handlers/templates/ItemplateApiHandler";

export interface INifiApiClient {
    requestSender : IHttpNifiRequestHandler;
    
    setProssesGroupHandler(prossGroupHandler : IProcessGroupsHandler);
    
    processGroup  : IProcessGroupsHandler ;
    
    setTemplateApiHandler(templateApiHandler : ITemplateApiHandler);

    template  : ITemplateApiHandler;
}