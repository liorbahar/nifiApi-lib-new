import {NifiRegistryAPIError} from "./NifiRegistryAPIError";

export class PolicyIdBodyNotEqualResource extends NifiRegistryAPIError {
    public constructor(public message: string) {
        super(message, 400);
    }
}