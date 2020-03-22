
import { IProcessorHandler } from "./IprocessorHandler";
import { INifiApiConnection } from "../../../nifiRequestSedner/nonSecure/INifiApiConnection";
import { ProcessorType } from "../../models/types/processor/processorType";


export class ProcessorHandler implements IProcessorHandler {
    private httpRequestHandler :INifiApiConnection;
    route = "/processors"
    constructor(httpRequestHandler : INifiApiConnection){
        this.httpRequestHandler = httpRequestHandler;
    }
    public async getProcessor(processorId: string) : Promise<ProcessorType>{
        return await this.httpRequestHandler.get(`${this.route}/${processorId}`) as ProcessorType;
    }
        
}