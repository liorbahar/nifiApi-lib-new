import { INifiApiConnection } from "./INifiApiConnection";
import { Utils } from "../../../utils/utils";
var rp = require('request-promise');
export class NifiApiConnection implements INifiApiConnection{
    private _url : string;
    private _dafulatHeaders : Object;
    constructor(host : string){
        this._url = this.validateUrl(host);
    }

    private validateUrl(url : string) : string{
        let newUrl = url;
        if (!url.endsWith('/nifi-api')){
            newUrl += "/nifi-api"
        }

        return newUrl;
    }

    
    get url(){
        return this.url;
    }

    get headers(){
        return this._dafulatHeaders;
    }


    setHeaders(key , value){
        if (!this._dafulatHeaders.hasOwnProperty(key)){
            this._dafulatHeaders[key] = value;
        }
        return this;
    }


    public async get(route:string , headers? : object){
        return await this.sendRequest(this.initParams(route,'GET',null,headers));
    }

    public async post(route : string ,body : object, headers? : object){
        return await this.sendRequest(this.initParams(route,'POST',body,headers));
    }

    public async delete(route : string ,body : object, headers? : object){
        return await this.sendRequest(this.initParams(route,'DELETE',body,headers));
    }

    public async put(route : string ,body : object, headers? : object){
        return await this.sendRequest(this.initParams(route,'PUT',body,headers));
    }
    private initParams(route :string ,method : string, body , headers) : object
    { 
        let opt : object = {
            method:method,
            uri : this.url + route,
            resolveWithFullResponse: true,
            json : true
        };
        
        if (!Utils.isNullOrUndefinded(body)){
            opt['body'] = body;
        }


        if (!Utils.isNullOrUndefinded(headers)){
            opt['headers'] = headers;
        }

        if (!Utils.isNullOrUndefinded(this._dafulatHeaders))
        {
            opt['headers'] = {...opt['headers'],...this._dafulatHeaders}
        }

        return opt;
    }
    
    private async sendRequest(options) : Promise<object>{
        console.log(options);
        let response = await rp(options)
            .then(function (res) {
                console.log(res.body)
                return res.body;
            })
            .catch(function (err) {
                console.log(err.response.body);
               // throw FactoryHttpError.getError(err);

            });

            return response;

            
    }
}