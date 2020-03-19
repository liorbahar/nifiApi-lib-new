
import { IProcessGroupsHandler } from "./IprocessGroupsHandler";
import { INifiApiConnection } from "../../nifiRequestSedner/nonSecure/INifiApiConnection";


export class ProcessGroupHandler implements IProcessGroupsHandler {
    private httpRequestHandler :INifiApiConnection;
    constructor(httpRequestHandler : INifiApiConnection){
        this.httpRequestHandler = httpRequestHandler;
    }


    public async getProcessGroup(pgId : string){
        try{
            return await this.httpRequestHandler.get(`/process-groups/${pgId}`);
        }
        catch(err){

        }

    }
        
}