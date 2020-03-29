
import { IBucketHandler } from "./IbucketHandler";
import { Bucket } from "../../models/bucket";
import { BucketType } from "../../models/types/bucketType";
import { IHttpRequestHandler } from "../../../../restRequestSender/interfaces/IhttpRequestHandler";



export class BucketHandler implements IBucketHandler {
    private httpRequestHandler : IHttpRequestHandler;
    url = "/buckets";
    constructor(httpRequestHandler : IHttpRequestHandler){
        this.httpRequestHandler = httpRequestHandler;
    }
    
    public async createBucket(bucket : Bucket) :  Promise<BucketType>{
        return await this.httpRequestHandler.post(this.url,bucket) as BucketType;
    }

    public async deleteBucket(bucketId) : Promise<BucketType> {
        return await this.httpRequestHandler.delete(`/buckets/${bucketId}`) as BucketType;
    }

    public async getBucket(bucketId) : Promise<BucketType> {
        return await this.httpRequestHandler.get(`/buckets/${bucketId}`) as BucketType;
    }

}

 

