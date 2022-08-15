import {Router} from "../../deps.ts";
import { ProductosController} from "../controllers/productos.controller.ts";

const router = new Router();
const controller = new ProductosController()


router.post("/prods", controller.postProducto);
router.get("/prods/:title", controller.getProductoId);
router.get("/prods/", controller.getProductos);
router.put("/prods/:id", controller.putProductoId);
router.delete("/prods/:id", controller.deleteProductoId)


export {router};