import {NifiRegistryAPIError} from "./NifiRegistryAPIError";

export class TheSpecifiedGroupDoesNotSupportModification extends NifiRegistryAPIError {
    public constructor(public message: string) {
        super(message, 400);
    }
}