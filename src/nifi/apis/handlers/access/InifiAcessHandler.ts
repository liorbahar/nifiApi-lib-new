export interface INifiAccessHandler{
    createAccessToken(username: string, password: string): Promise<any>;   
}