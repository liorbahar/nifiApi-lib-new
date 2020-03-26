import { INifiApiConnection } from "../nonSecure/INifiApiConnection";

export interface INifiApiSecureConnection extends  INifiApiConnection{
    sendRequest(options: object): Promise<object>;
}