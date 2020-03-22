
import { IProcessGroupsHandler } from "./IprocessGroupsHandler";
import { INifiApiConnection } from "../../../nifiRequestSedner/nonSecure/INifiApiConnection";
import { ProcessGroupType } from "../../models/types/processGroup/processGroupType";
import { Utils } from "../../../../utils/utils";
import { NifiApiConnection } from "../../../nifiRequestSedner/nonSecure/nifiApiConnection";
import { ProcessorType } from "../../models/types/processor/processorType";


export class ProcessGroupHandler implements IProcessGroupsHandler {
    private httpRequestHandler :INifiApiConnection;
    route = "/process-groups";
    constructor(httpRequestHandler : INifiApiConnection){
        this.httpRequestHandler = httpRequestHandler;
    }
    public async getProcessGroupByName(fatherId,name) : Promise<ProcessGroupType[]>{ 
        let allPgs : ProcessGroupType[] = await this.getAllProcessGroups(fatherId);
        return allPgs.filter(pg  => pg.component.name === name);
    }
    public async getAllProcessGroups(fatherId) : Promise<ProcessGroupType[]>{
        return await this.httpRequestHandler.get(`${this.route}/${fatherId}/process-groups`) as ProcessGroupType[];
    } 

    public async getBreadCrumb(pgId) : Promise<any[]>{
        let breadCrumb = [];
        let pg = await this.getProcessGroup(pgId);
        let id =  pg.id;
        while (!Utils.isNullOrUndefinded(id)){
            breadCrumb.push(pg.component.name);
            id = pg.component.parentGroupId;
            pg = await this.getProcessGroup(id);
        }
        console.log(breadCrumb);
        return breadCrumb.reverse();
    }

    public async getProcessGroup(pgId : string) : Promise<ProcessGroupType>{
        return await this.httpRequestHandler.get(`${this.route}/${pgId}`) as ProcessGroupType;
    }

    public async createProcessGroup(fatherId,name,x,y) : Promise<ProcessGroupType>{
        let body = {
            "revision": {
                "version": 0
            },
            "component": {
                "name": name,
                "position": {
                    "x": x,
                    "y": y
                }
            }
        };
        return await this.httpRequestHandler.post(`${this.route}/${fatherId}/process-groups`,body) as ProcessGroupType;
    }

    public async deleteProcessGroup(pgId) : Promise<ProcessGroupType>{
        return await this.httpRequestHandler.delete(`${this.route}/${pgId}`) as ProcessGroupType;
    }

    public async getProcessors(pgId) : Promise<ProcessorType[]>{
        return await this.httpRequestHandler.get(`${this.route}/${pgId}/processors`) as ProcessorType[];
    }
   
}


let pgHandler = new ProcessGroupHandler(new NifiApiConnection('http://localhost:9999/nifi-api'));
pgHandler.getBreadCrumb('036780d5-0171-1000-45e8-e381eea47919');