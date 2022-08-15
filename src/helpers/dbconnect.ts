import { MongoClient } from "../../deps.ts";


const client = new MongoClient();

await client.connect("mongodb://127.0.0.1:27017");

const dbname = "ecommerce_deno";
const db = client.database(dbname);

const Producto = db.collection("productos");

export {db, Producto}

