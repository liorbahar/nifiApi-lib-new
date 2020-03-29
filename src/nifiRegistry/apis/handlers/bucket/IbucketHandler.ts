import { Bucket } from "../../models/bucket";
import { BucketType } from "../../models/types/bucketType";

export interface IBucketHandler {
    createBucket(bucket : Bucket) :  Promise<BucketType>;

    deleteBucket(bucketId) : Promise<BucketType>;

    getBucket(bucketId) : Promise<BucketType>;
    
}