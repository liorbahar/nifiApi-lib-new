import { INifiAccessHandler } from "./INifiAcessHandler";
import { IHttpRequestHandler } from "../../../../restRequestSender/interfaces/IhttpRequestHandler";

export class NifiAccessHandler  implements INifiAccessHandler{
    private httpRequestHandler :IHttpRequestHandler;
    route = "/access";
    constructor(httpRequestHandler : IHttpRequestHandler){
        this.httpRequestHandler = httpRequestHandler;
    }
       
       public async createAccessToken(username: string, password: string): Promise<any> {
           let loginDetails : Object = { username : username, password : password};
           return await this.httpRequestHandler.post(`${this.route}/token`,null,null,false , 60000 ,loginDetails);
    }
}