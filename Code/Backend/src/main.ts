import express, { Express, Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import Item, { ItemManager } from './item';
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
  ItemManager.getItems(30, false).then((value) => { res.write(JSON.stringify(value)); res.end(); return 1 })
})

app.get("/api/addItem", (req: Request, res: Response) => {
  let parseUrl = url.parse(req.url, true)
  let item: Item = {name: parseUrl.query['name'], cost: Number(parseUrl.query['cost']), description: parseUrl.query['desc'], count: 0}
  ItemManager.addItem(item)

  res.end()
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});