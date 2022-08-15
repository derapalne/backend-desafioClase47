import { Producto } from "../helpers/dbconnect.ts";
import { ProductoDto } from "../dtos/productos.dto.ts";

export class ProductosDao {
    /**
     * @name addProducto
     * @param producto Objeto ProductoDto (title: string, price: number, description: string)
     * @returns $oid (Id de mongo del Producto)
     */
    async addProducto(producto: ProductoDto) {
        try {
            console.log(producto);
            return await Producto.insertOne(producto);
        } catch (error) {
            console.log(error);
        }
    }
    /**
     * @name getProductoById
     * @param id String del Id del producto
     * @returns new ProductoDto
     */
    async getProductoById(id: string) {
        try {
            const producto = await Producto.findOne({ id: id });
            console.log(producto, "producto");
            if (producto) return new ProductoDto(producto.title, producto.price, producto.description);
            else return "Producto no encontrado";
        } catch (error) {
            console.log(error);
        }
    }
    /**
     * @name getProductos
     * @returns new ProductoDto[]
     */
    async getProductos() {
        try {
            const productos = await Producto.find();
            console.log(productos);
            if (productos) {
                return productos.map((p) => {
                    return new ProductoDto(p.title, p.price, p.description);
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * @name updateProductoById
     * @param id String
     * @param producto Objeto ProductoDto (title: string, price: number, description: string)
     * @returns $oid (Id de mongo del Producto)
     */
    async updateProductoById(id: string, producto: ProductoDto) {
        try {
            console.log(id, producto)
            return await Producto.updateOne({ id: id }, {$set: {
                title: producto.title,
                price: producto.price,
                description: producto.description
            }});
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * @name deleteProductoById
     * @param id String del título del producto
     * @returns number
     */
    async deleteProductoById(id: string) {
        try {
            const ok = await Producto.deleteOne({ _id: id });
            console.log(ok);
            if (ok == 1) return ok;
            else return "El producto no ha podido ser eliminado";
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * @name deleteAll
     * @returns number
     */
    async deleteAll() {
        try {
            const cantidadEliminada = await Producto.deleteMany({});
            return cantidadEliminada;
        } catch (error) {
            console.log(error);
        }
    }
}
