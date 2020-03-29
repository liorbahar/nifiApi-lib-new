import {NifiRegistryAPIError} from "./NifiRegistryAPIError";

export class MultiplePoliciesError extends NifiRegistryAPIError {
    public constructor(public message: string) {
        super(message, 409);
    }
}