import { INifiRegistryApiConnection } from "./INifiRegistryApiConnection";
import { NifiRegistryAPIErrorFactory } from "../apis/error/factory/NifiRegistryAPIErrorFactory";
var rp = require('request-promise');
export class NifiRegistryApiConnection implements INifiRegistryApiConnection{
    private _url : string;
    constructor(url : string){
        this._url = this.validateUrl(url);
    }

    get url(){
        return this._url;
    }

    private validateUrl(url : string) : string{
        let newUrl = url;
        if (!url.endsWith('/nifi-api')){
            newUrl += "/nifi-api"
        }

        return newUrl;
    }

    public async sendRequest(options) : Promise<object>{
        options['resolveWithFullResponse']=  true;
        options['uri'] = this.url + options['uri'];

        
        console.log(options);
        let response = await rp(options)
            .then(function (res) {
                console.log(res.body)
                return res.body;
            })
            .catch(function (err) {
                console.log(err.response.body);
               throw NifiRegistryAPIErrorFactory.getNifiRegistryAPIError(err.response.body);

            });

            return response;
    }
}