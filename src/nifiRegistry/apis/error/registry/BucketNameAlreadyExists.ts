import {NifiRegistryAPIError} from "./NifiRegistryAPIError";

export class BucketNameAlreadyExists extends NifiRegistryAPIError {
    public constructor(public message: string) {
        super(message, 409);
    }
}