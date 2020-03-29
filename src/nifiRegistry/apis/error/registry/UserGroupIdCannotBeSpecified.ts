import {NifiRegistryAPIError} from "./NifiRegistryAPIError";

export class UserGroupIdCannotBeSpecified extends NifiRegistryAPIError {
    public constructor(public message: string) {
        super(message, 400);
    }
}