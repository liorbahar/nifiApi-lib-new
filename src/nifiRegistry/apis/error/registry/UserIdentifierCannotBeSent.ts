import {NifiRegistryAPIError} from "./NifiRegistryAPIError";

export class UserIdentifierCannotBeSent extends NifiRegistryAPIError {
    public constructor(public message: string) {
        super(message, 400);
    }
}