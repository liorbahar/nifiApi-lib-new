import { RevisionType } from "../revision/revisionType";
import { ProcessorComponentType } from "./processorComponentType";

export type ProcessorType = {
    revision: RevisionType;
    id: string;
    uri: string;
    component: ProcessorComponentType;
    status?: object;
}