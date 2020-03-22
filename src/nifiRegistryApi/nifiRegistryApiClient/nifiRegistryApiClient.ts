
import { IBucketHandler } from "../apis/handlers/bucket/IbucketHandler";

import { INifiRegistryApiConnection } from "../nifiRegistryRequestSedner/nonSecure/INifiRegistryApiConnection";
import { Utils } from "../../utils/utils";
import { BucketHandler } from "../apis/handlers/bucket/bucketHandler";
import { NifiRegistryApiConnection } from "../nifiRegistryRequestSedner/nonSecure/nifiRegistryApiConnection";



export class NifiRegistryApiClient {
    private _bucket : IBucketHandler;
    private nifi_registry_conn : INifiRegistryApiConnection;
    constructor(nifi_registry_conn : INifiRegistryApiConnection) {
        this.nifi_registry_conn = nifi_registry_conn;
    }

    setBucketHandler(bucketHandler : IBucketHandler){
        this._bucket = bucketHandler;
    }

    get bucket() : IBucketHandler {
        if (Utils.isNullOrUndefinded(this._bucket)){
            this._bucket = new BucketHandler(this.nifi_registry_conn);
        }
        return this._bucket;
    }
}