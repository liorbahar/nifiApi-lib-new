
import { IProcessGroupsHandler } from "../apis/processGroupsHandler/IprocessGroupsHandler";
import { Utils } from "../utils/utils";
import { ProcessGroupHandler } from "../apis/processGroupsHandler/prosessGroupHandler";
import { INifiApiConnection } from "../nifiRequestSedner/nonSecure/INifiApiConnection";


interface Handlers {
    processGroup? : IProcessGroupsHandler;
}


export class NifiApiClient {
    private _processGroup : IProcessGroupsHandler;
    private nifi_conn : INifiApiConnection;
    constructor(nifi_conn : INifiApiConnection) {
        // check if all handlers is null
        this.nifi_conn = nifi_conn;
    }

    setProssesGroupHandler(prossGroupHandler : IProcessGroupsHandler){
        this._processGroup = prossGroupHandler;
    }

    get processGroup() : IProcessGroupsHandler {
        if (Utils.isNullOrUndefinded(this._processGroup)){
            this._processGroup = new ProcessGroupHandler(this.nifi_conn);
        }
        return this._processGroup;
    }
}
