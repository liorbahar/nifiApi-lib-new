import { INifiApiSecureConnection } from "./INifiApiSecureConnection";
import { NifiApiConnection } from "../nonSecure/nifiApiConnection";


export class NifiApiSecureConnection extends NifiApiConnection implements INifiApiSecureConnection{
    private headers : Object;    
    constructor(host : string , username , password){
        super(host);
        super.setHeaders('Authonivation', `Bearer ${this.login(username , password)}`);
    } 

    private login(username ,password) : Object{
        return {}
    }
}