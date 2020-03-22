
import { IProcessorHandler } from "./IprocessorHandler";
import { INifiApiConnection } from "../../../nifiRequestSedner/nonSecure/INifiApiConnection";


export class ProcessorHandler implements IProcessorHandler {
    private httpRequestHandler :INifiApiConnection;
    constructor(httpRequestHandler : INifiApiConnection){
        this.httpRequestHandler = httpRequestHandler;
    }
    getProcessor(processorId: string) {
        throw new Error("Method not implemented.");
    }
        
}