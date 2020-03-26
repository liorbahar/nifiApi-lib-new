import { NifiRegistryApiConnection } from "../nonSecure/nifiRegistryApiConnection";
import { INifiRegistryApiSecureConnection } from "./INifiRegistryApiSecureConnection";

export class NifiApiRegistrySecureConnection extends NifiRegistryApiConnection implements INifiRegistryApiSecureConnection{
    private headers : Object;    
    constructor(host : string , username , password){
        super(host);
        super.setHeaders('Authonivation', `Bearer ${this.login(username , password)}`);
    } 

    private login(username ,password) : Object{
        return {}
    }
}