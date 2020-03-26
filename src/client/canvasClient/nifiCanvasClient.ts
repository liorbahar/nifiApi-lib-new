import { NifiApiClient } from "../../nifi/nifiClient/nifiApiClient/nifiApiClient";

import { Utils } from "../../utils/utils";
import { ICanvasTemplates } from "../../canvas/templates/ICanvasTemplates";
import { NifiCanvasTemplates } from "../../canvas/templates/CanvasTemplates";



export class NifiCanvasClient {
    private nifiApiClient : NifiApiClient;
    private _templatesHandler : ICanvasTemplates;
    constructor(nifiApiClient : NifiApiClient){
        this.nifiApiClient = nifiApiClient;
    }

    setCanvasTemplate(canvasTemplateHandler : ICanvasTemplates){
        this._templatesHandler = canvasTemplateHandler;
    }

    get templates() : ICanvasTemplates{
        if (Utils.isNullOrUndefinded(this._templatesHandler)){
            this.setCanvasTemplate(new NifiCanvasTemplates(this.nifiApiClient.template));
        }
        return this._templatesHandler;
    }

    
}