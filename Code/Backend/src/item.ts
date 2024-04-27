import { RowDataPacket } from "mysql2"
import { connection } from "./database"

export default interface Item {
    id?: number,
    name: string,
    cost: number,
    description: string,
    count: number
}

export class ItemManager {
    public static getItems(count: number, desc: boolean = false, filter: string = "cost", lastIndex: number = 0): Promise<Item[]>
    {
        return new Promise((resolve, reject) => {
            return connection.query<Item[] & RowDataPacket[][]>("SELECT * FROM item WHERE 1 ORDER BY ? ? LIMIT ?, ?",
                [filter, desc ? "DESC" : "ASC", lastIndex, count], (err, res) => {
                    if (err) reject(err)
                    else resolve(res)
                  }
            )
        })
    }

    public static addItem(item: Item) {
        new Promise((resolve, reject) => {
            connection.query("INSERT INTO item (name, cost, description, count) VALUES (?, ?, ?, ?)", [item.name, item.cost, item.description, item.count])
        }).then()
    }
}