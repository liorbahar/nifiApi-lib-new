import { INifiApiSecureConnection } from "./INifiApiSecureConnection";

import { NifiAccessHandler } from "../../apis/handlers/access/accessHandler";
import { constructor } from "path";
import { url } from "inspector";
import { HttpRequestHandler } from "../../../restRequestSender/httpRequestHandler";
import { NifiApiConnection } from "../nifiApiConnection";


export class NifiApiSecureConnection extends NifiApiConnection implements INifiApiSecureConnection{    
    private accessHandler : NifiAccessHandler;
    private authHeader : string;
    constructor(url : string , username , password){
        super(url);
        this.accessHandler = new NifiAccessHandler(new HttpRequestHandler(new NifiApiConnection(this.url)));
        this.authHeader = `Brearer ${this.accessHandler.createAccessToken(username,password)}}`

    } 
    public async sendRequest(options: object): Promise<object> {
        options['insecure'] = true;
        options['rejectUnauthorized'] = false;
        if (!options['headers']) {
            options['headers'] = {}
        }
        options['headers']['Authorization'] = this.authHeader;
        return await super.sendRequest(options);
    }
}