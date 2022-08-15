import { ProductosService } from "../services/productos.service.ts";
import { Context, helpers } from "../../deps.ts";

const service = new ProductosService();

export class ProductosController {
    async postProducto(ctx: Context) {
        const body = ctx.request.body();
        const { title, price, description } = await body.value;
        console.log(body.value);
        const id = await service.addProducto(title, price, description);
        ctx.response.body = {id: id};
        ctx.response.status = 201;
    }
    async getProductoId(ctx: Context) {
        const {id} = helpers.getQuery(ctx, {mergeParams: true});
        console.log(id, "12789");
        const response = await service.getProductoById(id);
        ctx.response.body = response;
        ctx.response.status = 200;
    }
    async getProductos(ctx: Context) {
        const response = await service.getProductos();
        ctx.response.body = response;
        ctx.response.status = 200;
    }
    async putProductoId(ctx: Context) {
        const {id} = helpers.getQuery(ctx, {mergeParams: true});
        const body = ctx.request.body();
        const {title, price, description} = await body.value;
        const response = await service.updateProductoById(id,{title, price, description});
        ctx.response.body = response;
        ctx.response.status = 201;
    }
    async deleteProductoId(ctx: Context) {
        const {id} = helpers.getQuery(ctx, {mergeParams: true});
        let response;
        if(id == "all") response = await service.deleteAll();
        else response = await service.deleteProductoById(id);
        ctx.response.body = response;
        ctx.response.status = 200;
    }
}
