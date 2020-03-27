export interface ITemplateHandler {
    getAllTemplates() : Promise<[]>;
    getTemplateByName(name);
}