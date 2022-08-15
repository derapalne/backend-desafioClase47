import { Application } from "./deps.ts";
import { router } from "./src/routers/productos.router.ts";

const app = new Application();
const PORT = 9999;

app.use(router.routes());
app.use(router.allowedMethods())

app.listen({ port: PORT });
console.log("http://localhost:9999");
