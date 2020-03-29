
import { IProcessGroupsHandler } from "./IprocessGroupsHandler";

import { ProcessGroupType } from "../../models/types/processGroup/processGroupType";
import { Utils } from "../../../../utils/utils";

import { ProcessorType } from "../../models/types/processor/processorType";
import { IHttpRequestHandler } from "../../../../restRequestSender/interfaces/IhttpRequestHandler";



export class ProcessGroupHandler implements IProcessGroupsHandler {
    private httpRequestHandler :IHttpRequestHandler;
    route = "/process-groups";
    constructor(httpRequestHandler : IHttpRequestHandler){
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

    public async getRootProcessGroup() : Promise<ProcessGroupType>{
        return await this.getProcessGroup('root');
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

    public async importFlowFromRegistry(parentId,registryId , bucketId , flowId,version) : Promise<ProcessGroupType>{
        let body = {
            revision:{
                version:0
            },
            component:{                
                version_control_information:{
                    bucketId:bucketId,
                    flowId:flowId,
                    registryId:registryId,
                    version:version
                }
            }
        }

        return await this.httpRequestHandler.post(`${this.route}/${parentId}/process-groups`,body) as ProcessGroupType;
    }

    public async deleteProcessGroup(pgId) : Promise<ProcessGroupType>{
        return await this.httpRequestHandler.delete(`${this.route}/${pgId}`) as ProcessGroupType;
    }

    public async getProcessors(pgId) : Promise<ProcessorType[]>{
        return await this.httpRequestHandler.get(`${this.route}/${pgId}/processors`) as ProcessorType[];
    }


    public async getAllFlowInNifi(){
        
    }
   
}


