import { INifiApiConnection } from "../../../nifiRequestSedner/nonSecure/INifiApiConnection";

export class NifiAccessHandler {
    private httpRequestHandler :INifiApiConnection;
    route = "/access";
    constructor(httpRequestHandler : INifiApiConnection){
        this.httpRequestHandler = httpRequestHandler;
    }

       async login(username: string, password: string): Promise<any> {
        let options = {
            uri: `${this.route}/token/login`,
            method: 'POST',
            headers: {
                Authorization: 'Basic ' +
                    Buffer.from(username + ':' + password).toString('base64')
            },
            json: false,
            insecure: true,
            rejectUnauthorized: false,
            timeout: 60000
        };

        let answer;
        try {
            //answer = await request(options);
        } catch (e) {
            console.log(e);
        }
        return answer;
    }
}