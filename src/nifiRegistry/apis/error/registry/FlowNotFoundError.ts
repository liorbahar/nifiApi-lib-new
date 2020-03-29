import {NifiRegistryAPIError} from "./NifiRegistryAPIError";

export class FlowNotFoundError extends NifiRegistryAPIError {
    public constructor(public message: string) {
        super(message, 404);
    }
}