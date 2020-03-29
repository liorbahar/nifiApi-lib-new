export interface IHttpRequestSender{
    sendRequest(options) : Promise<object>;
    
}