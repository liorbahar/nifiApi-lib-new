import {NifiRegistryAPIError} from "./NifiRegistryAPIError";

export class UserGroupDoesNotExist extends NifiRegistryAPIError {
    public constructor(public message: string) {
        super(message, 404);
    }
}