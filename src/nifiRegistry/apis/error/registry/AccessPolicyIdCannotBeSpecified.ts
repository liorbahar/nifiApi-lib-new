import {NifiRegistryAPIError} from "./NifiRegistryAPIError";

export class AccessPolicyIdCannotBeSpecified extends NifiRegistryAPIError {
    public constructor(public message: string) {
        super(message, 400);
    }
}