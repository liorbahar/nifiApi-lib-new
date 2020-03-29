import {NifiRegistryAPIError} from "./NifiRegistryAPIError";

export class UserGroupIdBodyNotEqualResource extends NifiRegistryAPIError {
    public constructor(public message: string) {
        super(message, 400);
    }
}