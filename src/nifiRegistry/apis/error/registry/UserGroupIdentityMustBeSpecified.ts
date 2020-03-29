import {NifiRegistryAPIError} from "./NifiRegistryAPIError";

export class UserGroupIdentityMustBeSpecified extends NifiRegistryAPIError {
    public constructor(public message: string) {
        super(message, 400);
    }
}