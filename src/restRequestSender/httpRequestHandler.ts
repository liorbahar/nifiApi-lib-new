import { IHttpRequestSender } from "./interfaces/IhttpRequestSender";
import { IHttpRequestHandler } from "./interfaces/IhttpRequestHandler";
import { Utils } from "../utils/utils";

export class HttpRequestHandler implements IHttpRequestHandler {
    private requestSender: IHttpRequestSender;
    constructor(requestSender: IHttpRequestSender) {
        this.requestSender = requestSender;
    }

    public async get(url:string , headers? : object , returnJsonResponse : boolean = true , timeout? : number){
        return await this.sendRequest('GET',url,null,headers,returnJsonResponse,timeout);
    }


    public async post(url : string ,body : object, headers? : object,returnJsonResponse : boolean = true , timeout? : number , formParams? : Object){
        return await this.sendRequest('POST',url,body,headers,returnJsonResponse,timeout,formParams);
    }

    public async delete(url : string ,body? : object, headers? : object , returnJsonResponse : boolean = true , timeout? : number , formParams? : Object){
        return await this.sendRequest('DELETE',url,body,headers,returnJsonResponse,timeout,formParams);
    }

    public async put(url : string ,body : object, headers? : object , returnJsonResponse : boolean = true , timeout? : number , formParams? : Object){
        return await this.sendRequest('PUT',url,body,headers,returnJsonResponse,timeout,formParams);
    }

    private async sendRequest(method, url, body,headers? ,returnJsonResponse : boolean = true , timeout? : number,formParams? : Object) {
        return await this.requestSender.sendRequest(this.initParams(url,method, body,headers,returnJsonResponse,timeout,formParams));
    }
    private initParams(route :string ,method : string, body , headers , returnJsonResponse , timeout ,formParams) : object
    { 
        
        let opt : object = {
            method:method,
            uri : route
        };
        
        if (!Utils.isNullOrUndefinded(body)){
            opt['body'] = body;
        }


        if (!Utils.isNullOrUndefinded(headers)){
            opt['headers'] = headers;
        }
        
        if (!Utils.isNullOrUndefinded(returnJsonResponse)){
            opt['json'] = false;
        }
        
        if (!Utils.isNullOrUndefinded(returnJsonResponse)){
            opt['json'] = returnJsonResponse;
        }

        if (!Utils.isNullOrUndefinded(timeout)){
            opt['timeout'] = timeout;
        }

        if (!Utils.isNullOrUndefinded(formParams)){
            opt['form'] = formParams;
        }


        return opt;
    }
}



