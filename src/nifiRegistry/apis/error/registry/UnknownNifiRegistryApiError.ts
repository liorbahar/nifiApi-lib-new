import {NifiRegistryAPIError} from "./NifiRegistryAPIError";

export class UnknownNifiRegistryApiError extends NifiRegistryAPIError {
    public constructor(public message: string) {
        super(message, 500);
    }
}