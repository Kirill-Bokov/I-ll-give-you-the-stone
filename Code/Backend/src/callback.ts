import StoneErrors from "./errors";

export default class Callback {
    public static async HandlePromise(prom: Promise<any>): Promise<string> {
        let result: string = await prom
        .then((res) => { if(typeof res === "number" || typeof res === "string") res = { result: res }; return JSON.stringify(res); })
            .catch((error) => { return StoneErrors.SERVER_ERROR(error); });

        return result;
    }
}