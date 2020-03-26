import { INifiApiConnection } from "../../../nifiRequestSedner/nonSecure/INifiApiConnection";
import { IHttpNifiRequestHandler } from "../../../nifiRequestSedner/genericHttpRequestHandler/IhttpNifiRequestHandler";
import { INifiAccessHandler } from "./INifiAcessHandler";

export class NifiAccessHandler  implements INifiAccessHandler{
    private httpRequestHandler :IHttpNifiRequestHandler;
    route = "/access";
    constructor(httpRequestHandler : IHttpNifiRequestHandler){
        this.httpRequestHandler = httpRequestHandler;
    }
       
       public async createAccessToken(username: string, password: string): Promise<any> {
           let loginDetails : Object = { username : username, password : password};
           return await this.httpRequestHandler.post(`${this.route}/token`,null,null,false , 60000 ,loginDetails);
    }
}