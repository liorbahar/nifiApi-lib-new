export interface IBucketHandler {
    createBucket(bucketName);

    deleteBucket(bucketId);

    getBucket(bucketId);
    
}