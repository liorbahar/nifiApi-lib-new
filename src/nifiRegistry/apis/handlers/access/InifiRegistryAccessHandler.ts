export interface INifiRegistryAccessHandler{
    createAccessToken(username: string, password: string): Promise<any>;   
}