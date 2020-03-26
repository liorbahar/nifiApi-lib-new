
import { ICanvasTemplates } from "./ICanvasTemplates";
import { ITemplateApiHandler } from "../../nifi/apis/handlers/templates/ItemplateApiHandler";


export class NifiCanvasTemplates implements ICanvasTemplates {
    private templateHandler : ITemplateApiHandler
    constructor(templateHandler : ITemplateApiHandler){
        this.templateHandler = templateHandler;
    }


    public async getTemplateByName(name){
        let allTemplates = await this.templateHandler.getAllTemplates();
        
        return allTemplates.find(template => template['name'] == name);
    }

    public async createTemplate(){

    }

    public async deleteTemplate(){
        
    }
}