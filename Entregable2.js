const fs = require('fs');

class ProductManager {
    constructor(filePath) {
        this.path = filePath;
        this.products = [];
        this.nuevoId = 1;
        this.loadProducts();
    }

    addProduct(productData) {
        try {
            const { title, description, price, thumbnail, code, stock } = productData;

            if (!title || !description || !price || !thumbnail || !code || !stock) {
                console.error("Hay que completar todos los campos");
                return false;
            }

            if (this.products.some(product => product.code === code)) {
                throw new Error("Ya hay un producto con ese code");
            }

            this.nuevoId = parseInt(this.nuevoId);//tengo errores al generar los id, me salen como null asique verifico de varios modos que se asigne correctamente

            const product = {
                id: this.nuevoId++,
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            };

            this.products.push(product);
            this.saveProducts();
            return true;
        } catch (error) {
            console.error(error.message);
            return false;
        }
    }

    //tuve que cambiar la forma en la que se recibian los datos ya que en el entregable 1 los pasaba como argumentos
    //y ahora los datos deberían pasarse como un solo objeto


    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (product) {
            return product;
        } else {
            console.error("Producto con id:", id, "no encontrado");
            return null;
        }
    }

    updateProduct(id, updatedProduct) {
        const index = this.products.findIndex(product => product.id === id);//utilicé findIndex para modificar el producto identificado por el id
        if (index !== -1) {
            this.products[index] = { ...this.products[index], ...updatedProduct };
            this.saveProducts();
            return true;
        } else {
            console.error("Producto con id:", id, "no encontrado");
            return false;
        }
    }

    deleteProduct(id) {
        const index = this.products.findIndex(product => product.id === id);
        if (index !== -1) {
            this.products.splice(index, 1);//utilicé el metodo splice para eliminar un producto en el index(id) mencionado
            this.saveProducts();
            return true;
        } else {
            console.error("Producto con id:", id, "no encontrado");
            return false;
        }
    }

    saveProducts() {
        const data = JSON.stringify(this.products, null, 2);
        fs.writeFileSync(this.path, data, 'utf8');
    }

    loadProducts() {
        try {
            const data = fs.readFileSync(this.path, 'utf8');
            this.products = JSON.parse(data);
            this.nuevoId = Math.max(...this.products.map(product => product.id)) + 1;
        } catch (error) {
            console.error("Error al cargar productos:", error.message);
        }
    }
}

const manager = new ProductManager('productos.json');

manager.addProduct({title: "Milanesa", description: "de Soja", price: 2000, thumbnail: "https://i.ibb.co/VT9N9wN/Milanesa-Soja.jpg", code: "1", stock: 24})
manager.addProduct({title: "Albóndiga", description: "de Lentejas", price: 1800, thumbnail: "https://i.ibb.co/GHYbvTR/Albondigas.jpg", code: "2", stock: 12})
manager.addProduct({title: "Tarta", description: "",price: 2500, thumbnail: "https://i.ibb.co/2d5sD3f/Tarta-Acelga.jpg", code: "3", stock: 4})//no se añade porque no tiene descripción
manager.addProduct({title: "Pizza", description: "Vegana", price: 4000, thumbnail: "https://imgs.search.brave.com/siJH1qUyw-koncJWz9guBi6pYzLTaeE0PwbXKuf8puc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb2JhZS5jb20v/bmV3LXJlc2l6ZXIv/YlJpbVdWeFU5TGpN/Sk8tQ2pxYjJyRWV2/VVVZPS9maWx0ZXJz/OmZvcm1hdCh3ZWJw/KTpxdWFsaXR5KDg1/KS9hcmMtYW5nbGVy/ZmlzaC1hcmMyLXBy/b2QtaW5mb2JhZS5z/My5hbWF6b25hd3Mu/Y29tL3B1YmxpYy9D/T08zSFE0MzJCRUVK/R1BYNEc3TkdDRE9W/NC5qcGc",code: "4", stock: 6})
manager.addProduct({title: "Hamburguesa", description: "de Remolacha", price: 600, thumbnail: "https://i.ibb.co/3dHmdrp/Hamburguesa-De-Remolacha.jpg", code: "2", stock: 36})

//console.log(manager.getProducts());
//actualizo el precio
//manager.updateProduct(1, { price: 2500 });

// console.log(manager.getProducts()); este es para listar luego de la modificación

//manager.deleteProduct(2);

// console.log(manager.getProducts());este para listar habiendo eliminado un objeto


//por razón que desconozco no se estaba asignando los id, y lo solucioné con un parseInt

console.log(manager.getProductById(1))