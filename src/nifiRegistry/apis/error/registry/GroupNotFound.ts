import {NifiRegistryAPIError} from "./NifiRegistryAPIError";

export class GroupNotFound extends NifiRegistryAPIError {
    public constructor(public message: string) {
        super(message, 404);
    }
}