
import { HttpRequestHandler } from "../../../restRequestSender/httpRequestHandler";
import { INifiRegistryApiSecureConnection } from "./INifiRegistryApiSecureConnection";
import { INifiRegistryAccessHandler } from "../../apis/handlers/access/InifiRegistryAccessHandler";
import { NifiRegistryAccessHandler } from "../../apis/handlers/access/nifiRegistryAccessHandler";
import { NifiRegistryApiConnection } from "../nifiRegistryApiConnection";


export class NifiRegistryApiSecureConnection extends NifiRegistryApiConnection implements INifiRegistryApiSecureConnection{    
    private accessHandler : INifiRegistryAccessHandler;
    private authHeader : string;
    constructor(url : string , username , password){
        super(url);
        this.accessHandler = new NifiRegistryAccessHandler(new HttpRequestHandler(new NifiRegistryApiConnection(this.url)));
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