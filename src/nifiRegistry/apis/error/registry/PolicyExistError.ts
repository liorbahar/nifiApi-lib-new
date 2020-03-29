import {NifiRegistryAPIError} from "./NifiRegistryAPIError";

export class PolicyExistError extends NifiRegistryAPIError {
    public constructor(public message: string) {
        super(message, 409);
    }
}