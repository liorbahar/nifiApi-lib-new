import { IProcessGroupsHandler } from "../../apis/handlers/processGroups/IprocessGroupsHandler";
import { IHttpNifiRequestHandler } from "../../nifiRequestSedner/genericHttpRequestHandler/IhttpNifiRequestHandler";
import { ITemplateHandler } from "../../apis/handlers/templates/ItemplateHandler";

export interface INifiApiClient {
    requestSender : IHttpNifiRequestHandler;
    
    setProssesGroupHandler(prossGroupHandler : IProcessGroupsHandler);
    
    processGroup  : IProcessGroupsHandler ;
    
    setTemplateApiHandler(templateApiHandler : ITemplateHandler);

    template  : ITemplateHandler;
}