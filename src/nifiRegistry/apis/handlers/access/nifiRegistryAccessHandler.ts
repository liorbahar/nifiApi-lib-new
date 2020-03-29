import { IHttpRequestHandler } from "../../../../restRequestSender/interfaces/IhttpRequestHandler";
import { INifiRegistryAccessHandler } from "./InifiRegistryAccessHandler";

export class NifiRegistryAccessHandler implements INifiRegistryAccessHandler{
    private httpRequestHandler :IHttpRequestHandler;
    route = "/access";
    constructor(httpRequestHandler : IHttpRequestHandler){
        this.httpRequestHandler = httpRequestHandler;
    }
       
       public async createAccessToken(username: string, password: string): Promise<any> {
           let loginDetails : Object = { username : username, password : password};
           let headers = {
            Authorization: 'Basic ' +
                Buffer.from(username + ':' + password).toString('base64')
        };
        return await this.httpRequestHandler.post(`${this.route}/token/login`,null,headers,false , 60000 ,loginDetails);
    }
}