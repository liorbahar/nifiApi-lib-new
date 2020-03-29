export interface IHttpRequestHandler{
    get(url:string , headers? : object , returnJsonResponse? : true , timeout? : number) : Promise<object>;

    post(url : string , body : object, headers? : object ,returnJsonResponse? : boolean , timeout? : number , formParams? : Object) : Promise<object>;

    delete(url : string ,body? : object, headers? : object , returnJsonResponse? : true , timeout? : number ,formParams? : Object) : Promise<object>;

    put(url : string ,body : object, headers? : object , returnJsonResponse? : true , timeout? : number , formParams? : Object) : Promise<object>;

    
}