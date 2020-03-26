import { INifiApiSecureConnection } from "./INifiApiSecureConnection";
import { NifiApiConnection } from "../nonSecure/nifiApiConnection";
import { NifiAccessHandler } from "../../apis/handlers/access/accessHandler";
import { constructor } from "path";
import { HttpNifiRequestHandler } from "../genericHttpRequestHandler/httpNifiRequestHandler";
import { url } from "inspector";


export class NifiApiSecureConnection extends NifiApiConnection implements INifiApiSecureConnection{    
    private accessHandler : NifiAccessHandler;
    private authHeader : string;
    constructor(url : string , username , password){
        super(url);
        this.accessHandler = new NifiAccessHandler(new HttpNifiRequestHandler(new NifiApiConnection(this.url)));
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