import { INifiApiSecureConnection } from "../nifiRequestSedner/secure/INifiApiSecureConnection";

export class NifiApiSecureClient {
    private nifi_conn : INifiApiSecureConnection;
    constructor(nifi_conn : INifiApiSecureConnection) {
        // check if all handlers is null
        this.nifi_conn = nifi_conn;
    }
}


