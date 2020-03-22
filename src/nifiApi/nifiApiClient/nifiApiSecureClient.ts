import { INifiApiSecureConnection } from "../nifiRequestSedner/secure/INifiApiSecureConnection";
import { NifiApiClient } from "./nifiApiClient";

export class NifiApiSecureClient extends NifiApiClient{
    constructor(nifi_conn : INifiApiSecureConnection) {
        super(nifi_conn);
        
    }
}


