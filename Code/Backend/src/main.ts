import express, { Express, Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import Item, { ItemManager, Provider, ProviderManager } from './item';
const url = require("url")

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.set( "views", path.join( __dirname, "/public/views" ) );
app.set( "view engine", "ejs" );

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req: Request, res: Response) => {
  res.render("index");
});

app.get("/api/getItems", (req: Request, res: Response) => {
  let parseUrl = url.parse(req.url, true)

  ItemManager.getItems(30, parseUrl.query['asc'] == null, parseUrl.query['filter'] || "cost", Number(parseUrl.query['index']) | 0).then((value) => { res.write(JSON.stringify(value)); res.end(); return 1 })
})

app.get("/api/addItem", (req: Request, res: Response) => {
  let parseUrl = url.parse(req.url, true)

  if(parseUrl.query['name'] == null || parseUrl.query['cost'] == null || parseUrl.query['desc'] == null) { res.write("-1"); res.end(); return; }

  let item: Item = {name: parseUrl.query['name'], cost: Number(parseUrl.query['cost']), description: parseUrl.query['desc'], count: 0}
  
  ItemManager.addItem(item).then((value) => { res.write(String(value)); res.end(); return; })
})

app.get("/api/addProvider", (req: Request, res: Response) => {
  let parseUrl = url.parse(req.url, true)

  if(parseUrl.query['name'] == null || parseUrl.query['inn'] == null || parseUrl.query['checkaccount'] == null) { res.write("-1"); res.end(); return; }

  let provider: Provider = {name: parseUrl.query['name'], INN: parseUrl.query['inn'], checkAccount: parseUrl.query['checkaccount'] }
  
  ProviderManager.addProvider(provider).then((value) => { res.write(String(value)); res.end(); return; })
})

app.get("/api/deleteProvider", (req: Request, res: Response) => {
  let parseUrl = url.parse(req.url, true)

  if(parseUrl.query['id'] == null) { res.write("-1"); res.end(); return; }

  ProviderManager.deleteProvider(Number(parseUrl.query['id'])).then((value) => { res.write(value); res.end(); return; })
})

app.get("/api/provideItem", (req: Request, res: Response) => {
  let parseUrl = url.parse(req.url, true)

  if(parseUrl.query['provider'] == null || parseUrl.query['item'] == null) { res.write("-1"); res.end(); return; }

  ProviderManager.provideItem(Number(parseUrl.query['provider']), Number(parseUrl.query['item'])).then((value) => { res.write(String(value)); res.end(); return; })
})

app.get("/api/addAction", (req: Request, res: Response) => {
  let parseUrl = url.parse(req.url, true)

  if(parseUrl.query['item'] == null || parseUrl.query['type'] == null || parseUrl.query['count'] == null || parseUrl.query['date'] == null) { res.write("-1"); res.end(); return; }

  let date: Date = new Date(parseUrl.query['date'])

  ItemManager.addAction(Number(parseUrl.query['item']), Number(parseUrl.query['type']), Number(parseUrl.query['count']), date).then((value) => { res.write(String(value)); res.end(); return; })
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});