import { INifiRegistryApiSecureConnection } from "../nifiRegistryRequestSedner/secure/INifiRegistryApiSecureConnection";
import { NifiRegistryApiClient } from "./nifiRegistryApiClient";

export class NifiApiRegistrySecureClient extends NifiRegistryApiClient{
    constructor(nifi_registry_conn : INifiRegistryApiSecureConnection) {
        super(nifi_registry_conn);
    }
}


