import express, { Express, Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import Item, { ItemManager, Provider, ProviderManager } from './item';
import StoneErrors from "./errors";
import Callback from "./callback";
import CategoryManager from "./category";
import UserManager from "./user";

const url = require("url")

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "x-www-form-urlencoded, Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  next();
})

app.get("/api/user/", async (req: Request, res: Response) => {
  const q = req.query

  if(!q['token'] && (!q['password'] || !q['email'])) { res.write(StoneErrors.QUERY_ERROR()); res.end(); return; }

  res.write(await Callback.HandlePromise(UserManager.auth({ login: "", email: String(q['email']), password: String(q['password']), token: String(q['token'] || "")})));
  res.end();
});

app.post("/api/user/", async (req: Request, res: Response) => {
  const q = req.body

  if(!q['email'] || !q['password'] || !q['login']) { res.write(StoneErrors.QUERY_ERROR()); res.end(); return; }

  res.write(await Callback.HandlePromise(UserManager.addUser({ login: String(q['login']), email: String(q['email']), password: String(q['password'])})));
  res.end();
});

app.get("/api/category/", async (req: Request, res: Response) => {
  const q = req.query

  res.write(await Callback.HandlePromise(CategoryManager.getCategories()));
  res.end();
});

app.post("/api/category/", async (req: Request, res: Response) => {
  const q = req.body

  if(!q['name'] || !q['desc']) { res.write(StoneErrors.QUERY_ERROR()); res.end(); return; }

  res.write(await Callback.HandlePromise(CategoryManager.addCategory(q['name'], q['desc'], q['parent'])));
  res.end();
});

app.get("/api/item/", async (req: Request, res: Response) => {
  const q = req.query

  res.write(await Callback.HandlePromise(ItemManager.getItems(Number(q['count'] || 30), q['asc'] == null, String(q['filter'] || "id"), Number(q['index'] || 0), Number(q['category'] || 0))));
  res.end();
})

app.post("/api/item/", async (req: Request, res: Response) => {
  const q = req.body

  if(!q['name'] || !q['cost'] || !q['desc']) { res.status(502); res.write(StoneErrors.QUERY_ERROR()); res.end(); return; }

  let item: Item = {name: String(q['name']), cost: Number(q['cost']), description: String(q['desc']), count: 0}
  
  res.write(await Callback.HandlePromise(ItemManager.addItem(item)));
  res.end();
})

app.post("/api/provider/", async (req: Request, res: Response) => {
  const q = req.body

  if(!q['name'] || !q['inn'] || !q['checkAccount']) { res.status(502); res.write(StoneErrors.QUERY_ERROR()); res.end(); return; }

  let provider: Provider = {name: q['name'], INN: q['inn'], checkAccount: q['checkAccount'] }
  
  res.write(await Callback.HandlePromise(ProviderManager.addProvider(provider)));
  res.end();
})

app.delete("/api/provider/", async (req: Request, res: Response) => {
  const q = req.params

  if(!q['id']) { res.status(502); res.write(StoneErrors.QUERY_ERROR()); res.end(); return; }

  res.write(await Callback.HandlePromise(ProviderManager.deleteProvider(Number(q['id']))));
  res.end();
})

app.post("/api/provideItem/", async (req: Request, res: Response) => {
  const q = req.body

  if(!q['provider'] || !q['item']) { res.status(502); res.write(StoneErrors.QUERY_ERROR()); res.end(); return; }

  res.write(await Callback.HandlePromise(ProviderManager.provideItem(Number(q['provider']), Number(q['item']))));
  res.end();
})

app.patch("/api/item/action/", async (req: Request, res: Response) => {
  const q = req.params

  if(!q['item'] || !q['type'] || !q['count'] || !q['date']) { res.status(502); res.write(StoneErrors.QUERY_ERROR()); res.end(); return; }

  let date: Date = new Date(q['date'])

  res.write(await Callback.HandlePromise(ItemManager.addAction(Number(q['item']), Number(q['type']), Number(q['count']), date)));
  res.end();
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});