import { ITemplateApiHandler } from "./ItemplateApiHandler";
import { IHttpNifiRequestHandler } from "../../../nifiRequestSedner/genericHttpRequestHandler/IhttpNifiRequestHandler";

 export class TemplateApiHandler implements ITemplateApiHandler{
    private httpRequestHandler :IHttpNifiRequestHandler;
    route = "/flows";
    constructor(httpRequestHandler : IHttpNifiRequestHandler){
        this.httpRequestHandler = httpRequestHandler;
    }

    public async getAllTemplates() : Promise<[]>{
        return await this.httpRequestHandler.get(`${this.route}/templates`)as [];
    }

 }