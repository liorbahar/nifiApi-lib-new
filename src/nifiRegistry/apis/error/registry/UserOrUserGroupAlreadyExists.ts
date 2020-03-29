import {NifiRegistryAPIError} from "./NifiRegistryAPIError";

export class UserOrUserGroupAlreadyExists extends NifiRegistryAPIError {
    public constructor(public message: string) {
        super(message, 409);
    }
}