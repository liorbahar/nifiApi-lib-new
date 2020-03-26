import { ProcessorType } from "../../models/types/processor/processorType";

export interface IProcessorHandler {
    getProcessor(processorId: string) : Promise<ProcessorType>
}