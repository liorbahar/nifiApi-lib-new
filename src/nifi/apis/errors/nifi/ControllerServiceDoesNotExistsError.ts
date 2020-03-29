import {NiFiAPIError} from "./NiFiAPIError";
import {ErrorType} from "../ErrorTypes";


export class ControllerServiceDoesNotExistsError extends NiFiAPIError {
    public constructor(errorMessage: string, details?: string) {
        super(errorMessage, details, 404, ErrorType.USER);
    }
}