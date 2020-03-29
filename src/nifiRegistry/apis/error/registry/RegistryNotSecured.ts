import {NifiRegistryAPIError} from "./NifiRegistryAPIError";

export class RegistryNotSecured extends NifiRegistryAPIError {
    public constructor(public message: string) {
        super(message, 404);
    }
}