import { NifiApiClient } from "../nifi/nifiClient/nifiApiClient/nifiApiClient";
import { NifiCanvasClient } from "./canvasClient/nifiCanvasClient";
import { INifiApiClient } from "../nifi/nifiClient/nifiApiClient/InifiApiClient";

export class NifiClient {
    private _nifiApiClient : INifiApiClient;
    private _nifiCanvasClient : NifiCanvasClient;
    constructor(nifiApiClient? : INifiApiClient , nifiCanvasClient? : NifiCanvasClient){
        this._nifiApiClient = nifiApiClient;
        this._nifiCanvasClient = nifiCanvasClient;
    }
    setNifiApiClient(nifiApiClient : INifiApiClient){
        this._nifiApiClient = nifiApiClient;
    }
    setNifiCanvasClient(nifiCanvasClient : NifiCanvasClient){
        this._nifiCanvasClient = nifiCanvasClient;
    }
    

    get nifiApi() : INifiApiClient{
        return this._nifiApiClient;
    }

    get canvas() : NifiCanvasClient{
        return this._nifiCanvasClient;
    }


}

