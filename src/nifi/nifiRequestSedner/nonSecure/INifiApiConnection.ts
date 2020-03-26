export interface INifiApiConnection{
    sendRequest(options) : Promise<object>;
}