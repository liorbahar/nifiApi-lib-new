import {NifiRegistryAPIError} from "./NifiRegistryAPIError";

export class FlowVersionNotFoundError extends NifiRegistryAPIError {
    public constructor(public message: string) {
        super(message, 404);
    }
}