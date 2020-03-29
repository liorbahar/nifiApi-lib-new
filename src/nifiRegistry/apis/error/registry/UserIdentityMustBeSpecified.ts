import {NifiRegistryAPIError} from "./NifiRegistryAPIError";

export class UserIdentityMustBeSpecified extends NifiRegistryAPIError {
    public constructor(public message: string) {
        super(message, 400);
    }
}