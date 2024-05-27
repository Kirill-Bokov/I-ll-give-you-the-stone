
export default class StoneErrors {
    public static QUERY_ERROR(): string {
        return JSON.stringify({ error: "Wrong query requested", code: "-1" });
    }

    public static SERVER_ERROR(reason: any): string {
        return JSON.stringify({ error: reason, code: "-200" });
    }
};