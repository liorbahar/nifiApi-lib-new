
import { IProcessorHandler } from "./IprocessorHandler";
import { ProcessorType } from "../../models/types/processor/processorType";
import { IHttpRequestHandler } from "../../../../restRequestSender/interfaces/IhttpRequestHandler";



export class ProcessorHandler implements IProcessorHandler {
    private httpRequestHandler :IHttpRequestHandler;
    route = "/processors"
    constructor(httpRequestHandler : IHttpRequestHandler){
        this.httpRequestHandler = httpRequestHandler;
    }
    public async getProcessor(processorId: string) : Promise<ProcessorType>{
        return await this.httpRequestHandler.get(`${this.route}/${processorId}`) as ProcessorType;
    }
        
}