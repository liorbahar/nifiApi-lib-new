import { Bucket } from "../bucket";
import { BucketType } from "../types/bucketType";

export class BucketBuilder implements BucketType {
    identifier: string;
    name: string;
    description: string;
    

    setIdentifier(id: string){
        this.identifier = id
        return this;
    }

    setName(name: string){
        this.name = name;
        return this;
    }

    setDescription(description: string){
        this.description= description;
        return this;
    }

    build() {
        return new Bucket(this);
    }
}