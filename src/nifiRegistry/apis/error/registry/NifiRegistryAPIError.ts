import {DrDregistryError} from "../DrDregistryError";

export abstract class NifiRegistryAPIError extends DrDregistryError {

    protected constructor(public message: string, status: number) {
        super(message, status, 'Nifi Registry');
    }

}