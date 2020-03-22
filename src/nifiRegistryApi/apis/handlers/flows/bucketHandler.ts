

import { INifiRegistryApiConnection } from "../../../nifiRegistryRequestSedner/nonSecure/INifiRegistryApiConnection";
import { IBucketHandler } from "../bucket/IbucketHandler";


export class BucketHandler implements IBucketHandler {
    private httpRequestHandler : INifiRegistryApiConnection;
    constructor(httpRequestHandler : INifiRegistryApiConnection){
        this.httpRequestHandler = httpRequestHandler;
    }
    createBucket(bucketName: any) {
        throw new Error("Method not implemented.");
    }
    deleteBucket(bucketId: any) {
        throw new Error("Method not implemented.");
    }
    getBucket(bucketId: any) {
        throw new Error("Method not implemented.");
    }    
}