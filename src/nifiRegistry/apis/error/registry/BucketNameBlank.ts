import {NifiRegistryAPIError} from "./NifiRegistryAPIError";

export class BucketNameBlank extends NifiRegistryAPIError {
    public constructor(public message: string) {
        super(message, 400);
    }
}