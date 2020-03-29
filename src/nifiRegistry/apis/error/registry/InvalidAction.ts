import {NifiRegistryAPIError} from "./NifiRegistryAPIError";

export class InvalidAction extends NifiRegistryAPIError {
    public constructor(public message: string) {
        super(message, 400);
    }
}