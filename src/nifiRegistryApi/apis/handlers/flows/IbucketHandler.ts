export interface IFlowHandler {
    deleteFlow(flowId);

    getFlow(bucketId,flowId,version);   
}