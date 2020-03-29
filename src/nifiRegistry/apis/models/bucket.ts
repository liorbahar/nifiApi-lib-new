import { BucketBuilder } from "./modelBuilder/bucketBuilder";
import { BucketType } from "./types/bucketType";

export class Bucket implements BucketType {
    identifier: string;
    name: string;
    description: string;
    createdTimestamp?: number;

    constructor(bucketBuilder: BucketBuilder) {
        this.identifier = bucketBuilder.identifier;
        this.name = bucketBuilder.name;
        this.description = bucketBuilder.description;
    }
}