import { ResultSetHeader, RowDataPacket } from "mysql2";
import { connection } from "./database";
import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { createSecretKey } from "crypto";

export interface User {
    id?: number,
    login: string,
    password: string,
    shopperId?: number,
    email?: string,
    token?: string
};

let secret = createSecretKey("66880456a58d8707fd255877e621d213b350de477d51deceb50081b2091c0527", "base64");

export default class UserManager {

    static getToken(user: User): string {
        return jwt.sign(user, secret, {
            expiresIn: '30d'
          });
    }

    public static auth(user: User): Promise<string> {
        return new Promise(async (resolve, reject) => {
            let payload: JwtPayload = {};
            try {
                jwt.verify(user.token || "", secret, { algorithms: ['HS256'] }, (err, decoded) => {
                    payload = decoded as JwtPayload;
                });
            } catch(error) { }
            try {
                connection.query<RowDataPacket[][] & User[]>("SELECT u.*, s.email FROM user AS u INNER JOIN shopper AS s ON s.id=u.shopperId WHERE s.email=?", [user.email && user.email?.length > 1 ? user.email : payload.email],
                async (err, res) => { if(!err) { if(!res[0] || (user.password && await bcrypt.compare(user.password, res[0].password)) || (user.token && res[0].email == payload.email && res[0].password == payload.password)) resolve(this.getToken(res[0])); else reject("Wrong password"); } else reject(err); })
            } catch(error) { }
        })
    }
    
    public static addUser(user: User): Promise<number> {
        return new Promise(async (resolve, reject) => {
            const hash = await bcrypt.hash(user.password, 10);

            connection.query<ResultSetHeader>("INSERT INTO shopper (FIO, address, email, phone) VALUES ('', '', ?, '')", [user.email],
            (_err2, res2) => {
            connection.query<ResultSetHeader>("INSERT INTO user (login, password, shopperId) VALUES (?, ?, ?)", [user.login, hash, res2.insertId],
        async (_err, res) => { if(!_err) { 
             resolve(res.insertId); } else reject(_err) })
        });
        })
    }
}