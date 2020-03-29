import {NifiRegistryAPIError} from "./NifiRegistryAPIError";

export class ResourceMustBeSpecified extends NifiRegistryAPIError {
    public constructor(public message: string) {
        super(message, 400);
    }
}