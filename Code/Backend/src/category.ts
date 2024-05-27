import { ResultSetHeader, RowDataPacket } from "mysql2";
import { connection } from "./database"

export interface Category {
    id?: number,
    name: string,
    description: string,
    parent?: number
}

class CategoryManager {

    public static getCategories(level: number = 0) {
        return new Promise((resolve, reject) => {
            connection.query<RowDataPacket[][] & Category[]>("SELECT * FROM category WHERE 1", [],
        (_err, res) => { if(!_err) resolve(res); else reject(_err) })
        })
    }

    public static addItem(category: number, item: number) {
        return new Promise((resolve, reject) => {
            connection.query<ResultSetHeader>("INSERT INTO itemCategory VALUES (?, ?)", [category, item],
        (_err, res) => { if(!_err) resolve(res.insertId); else reject(_err) })
        })
    }

    public static addCategory(name: string, desc: string, parent?: number) {
        return new Promise((resolve, reject) => {
            connection.query<ResultSetHeader>("INSERT INTO category (name, description, parent) VALUES (?, ?, ?)", [name, desc, parent],
        (_err, res) => { if(!_err) resolve(res.insertId); else reject(_err) })
        })
    }

    public static deleteCategory(id: number) {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM category WHERE id=?", [id],
        (_err, res) => { if(!_err) resolve("1"); else reject(_err) })
        })
    }
}

export default CategoryManager;