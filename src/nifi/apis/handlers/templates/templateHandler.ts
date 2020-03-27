
import { IHttpNifiRequestHandler } from "../../../nifiRequestSedner/genericHttpRequestHandler/IhttpNifiRequestHandler";
import { ITemplateHandler } from "./ItemplateHandler";

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


    public async createTemplate(){

    }

    public async deleteTemplate(){
        
    }

 }