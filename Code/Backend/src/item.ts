import { ResultSetHeader, RowDataPacket } from "mysql2"
import { connection } from "./database"

export default interface Item {
    id?: number,
    name: string,
    cost: number,
    description: string,
    count: number
}

export interface Provider {
    id?: number,
    name: string,
    INN: string,
    checkAccount: string
}

export function parseItem(data: RowDataPacket[][], result: Item[])
{
    for(let i=0; i < data.length; i++)
        result.push({id: Number(data[i][0]), name: String(data[i][1]), cost: Number(data[i][2]), description: String(data[i][3]), count: Number(data[i][4])});
}

export class ProviderManager {
    public static addProvider(provider: Provider): Promise<number>
    {
        return new Promise((resolve, reject) => {
            connection.query<ResultSetHeader>("INSERT INTO provider (name, INN, checkAccount) VALUES (?, ?, ?)", [provider.name, provider.INN, provider.checkAccount],
        (_err, res) => { if(!_err) resolve(res.insertId); else reject(_err) })
        })
    }

    public static deleteProvider(id: number): Promise<string>
    {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM provider WHERE id=?", [id],
                (_err, res) => { if(!_err) resolve("1"); else reject(_err); }
            )
        })
    }

    public static provideItem(providerId: number, itemId: number)
    {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO provide (providerId, itemId) VALUES (?, ?)", [providerId, itemId],
                (_err, res) => { if(!_err) resolve("1"); else reject(_err); }
            )
        })
    }
}

export class ItemManager {
    public static getItems(count: number, desc: boolean, filter: string, lastIndex: number): Promise<Item[]>
    {
        if(count > 50) count = 50;
        if(count < 10) count = 10;
        let param = desc ? "DESC" : "ASC"

        return new Promise((resolve, reject) => {
            try {
            return connection.query<RowDataPacket[][]>(`SELECT * FROM item WHERE 1 ORDER BY ${filter} ${param} LIMIT ?, ?`,
                [lastIndex, count], (err, res) => {
                    if (err) reject(err)
                    else { let tmp: Item[] = []; parseItem(res, tmp); resolve(tmp); }
                  }
            )
            } catch {}
        })
    }

    public static addItem(item: Item): Promise<number> {
        return new Promise((resolve, reject) => {
            connection.query<ResultSetHeader>("INSERT INTO item (name, cost, description, count) VALUES (?, ?, ?, ?)", [item.name, item.cost, item.description, item.count],
        (_err, res) => { if(!_err) resolve(res.insertId); else reject(_err) })
        })
    }

    public static addAction(itemId: number, type: number, count: number, date: Date): Promise<number>
    {
        return new Promise((resolve, reject) => {
            connection.query<ResultSetHeader>("INSERT INTO action (idItem, type, count, date) VALUES (?, ?, ?, ?)", [itemId, type, count, date],
        (_err, res) => { if(!_err) resolve(res.insertId); else reject(_err) })
        })
    }
}