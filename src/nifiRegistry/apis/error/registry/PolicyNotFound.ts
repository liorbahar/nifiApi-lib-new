import {NifiRegistryAPIError} from "./NifiRegistryAPIError";

export class PolicyNotFound extends NifiRegistryAPIError {
    public constructor(public message: string) {
        super(message, 404);
    }
}