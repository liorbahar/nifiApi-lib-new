import { ProcessGroupComponentType } from "./processGroupComponentType";
import { RevisionType } from "../revision/revisionType";


export type ProcessGroupType = {
    revision?: RevisionType;
    id?: string;
    uri?: string;
    disconnectedNodeAcknowledged?: boolean;
    component?: ProcessGroupComponentType;
}