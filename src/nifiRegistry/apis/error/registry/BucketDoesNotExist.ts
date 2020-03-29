import {NifiRegistryAPIError} from "./NifiRegistryAPIError";

export class BucketDoesNotExist extends NifiRegistryAPIError {
    public constructor(public message: string) {
        super(message, 404);
    }
}