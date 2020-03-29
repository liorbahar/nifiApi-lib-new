import {NifiRegistryAPIError} from "./NifiRegistryAPIError";

export class UserNotFound extends NifiRegistryAPIError {
    public constructor(public message: string) {
        super(message, 404);
    }
}