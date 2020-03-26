
import { IProcessorHandler } from "./IprocessorHandler";
import { INifiApiConnection } from "../../../nifiRequestSedner/nonSecure/INifiApiConnection";
import { ProcessorType } from "../../models/types/processor/processorType";
import { IHttpNifiRequestHandler } from "../../../nifiRequestSedner/genericHttpRequestHandler/IhttpNifiRequestHandler";


export class ProcessorHandler implements IProcessorHandler {
    private httpRequestHandler :IHttpNifiRequestHandler;
    route = "/processors"
    constructor(httpRequestHandler : IHttpNifiRequestHandler){
        this.httpRequestHandler = httpRequestHandler;
    }
    public async getProcessor(processorId: string) : Promise<ProcessorType>{
        return await this.httpRequestHandler.get(`${this.route}/${processorId}`) as ProcessorType;
    }
        
}