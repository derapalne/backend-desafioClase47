import { ProductosDao } from "../daos/productos.dao.ts";
import { ProductoDto } from "../dtos/productos.dto.ts";

const dao = new ProductosDao();

export class ProductosService {

    async addProducto(title: string, price: number, description: string) {
        const producto = new ProductoDto(title, price, description)
        return await dao.addProducto(producto);
    }

    async getProductoById(id: string) {
        return await dao.getProductoById(id);
    }

    async getProductos() {
        return await dao.getProductos();
    }

    async updateProductoById(id: string, producto: {title: string, price: number, description: string}) {
        const newProducto = new ProductoDto(producto.title, producto.price, producto.description);
        return await dao.updateProductoById(id, newProducto);
    }

    async deleteProductoById(id: string) {
        return await dao.deleteProductoById(id);
    }

    async deleteAll() {
        return await dao.deleteAll();
    }
}

