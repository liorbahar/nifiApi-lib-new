import { ProcessGroupType } from "../../models/types/processGroup/processGroupType";
import { ProcessorType } from "../../models/types/processor/processorType";

export interface IProcessGroupsHandler {
    getProcessGroup(pgId : string) : Promise<ProcessGroupType>;

    getProcessGroupByName(fatherId,name) : Promise<ProcessGroupType[]>;

    getAllProcessGroups(fatherId) : Promise<ProcessGroupType[]>;

    getBreadCrumb(pgId) : Promise<any[]>;

    createProcessGroup(fatherId,name,x,y) : Promise<ProcessGroupType>;

    deleteProcessGroup(pgId) : Promise<ProcessGroupType>;

    getProcessors(pgId) : Promise<ProcessorType[]>;

    importFlowFromRegistry(parentId,registryId , bucketId , flowId,version) : Promise<ProcessGroupType>;

    getRootProcessGroup() : Promise<ProcessGroupType>;

    
}