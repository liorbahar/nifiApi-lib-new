
import { IHttpNifiRequestHandler } from "../../../nifiRequestSedner/genericHttpRequestHandler/IhttpNifiRequestHandler";
import { ITemplateHandler } from "./ItemplateHandler";

// TODO : create template model
 export class TemplateHandler implements ITemplateHandler{
    private httpRequestHandler :IHttpNifiRequestHandler;
    route = "/flows";
    constructor(httpRequestHandler : IHttpNifiRequestHandler){
        this.httpRequestHandler = httpRequestHandler;
    }

    public async getAllTemplates() : Promise<[]>{
        return await this.httpRequestHandler.get(`${this.route}/templates`)as [];
    }


    public async getTemplateByName(name){
        let allTemplates = await this.getAllTemplates();
        
        return allTemplates.find(template => template['name'] == name);
    }

    public async createTemplate(pgId , name , descriptions : string= ''){
        let snipetId =''; //create_snippet(pgId);
        
        let body = {
            name:name,
            description:descriptions,
            snippetId:snipetId
        };
        let parentId = '';
        return await this.httpRequestHandler.post(`process-groups/${parentId}/templates`,body);
    }

    public async deleteTemplate(templateId){
        return await this.httpRequestHandler.delete(`${this.route}/templates/${templateId}`);
        
    }

 }