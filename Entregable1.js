class ProductManager {
    constructor() {
        this.products = []
        this.nuevoId = 1
    }

    addProduct(title, description, price, thumbnail, code, stock) {

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Hay que completar todos los campos")
        }
        if (this.products.some(product => product.code === code)) {
            console.error("Ya hay un producto con ese code")
        }
        const product = {
            id: this.nuevoId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        this.products.push(product)
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id)
        if (product) {
            return product;
        } else {
            console.error("Producto con id:", id, "no encontrado")
            return null;
        }
    }
}

const manager = new ProductManager()

manager.addProduct("Milanesa", "de Soja", 2000, "https://i.ibb.co/VT9N9wN/Milanesa-Soja.jpg", "1", 24)
manager.addProduct("Albóndiga", "de Lentejas", 1800, "https://i.ibb.co/GHYbvTR/Albondigas.jpg", "2", 12)
manager.addProduct("Tarta", "",2500, "https://i.ibb.co/2d5sD3f/Tarta-Acelga.jpg", "3", 4)
//este al no tener descripción arroja error 
manager.addProduct("Pizza", "Vegana", 4000, "https://imgs.search.brave.com/siJH1qUyw-koncJWz9guBi6pYzLTaeE0PwbXKuf8puc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb2JhZS5jb20v/bmV3LXJlc2l6ZXIv/YlJpbVdWeFU5TGpN/Sk8tQ2pxYjJyRWV2/VVVZPS9maWx0ZXJz/OmZvcm1hdCh3ZWJw/KTpxdWFsaXR5KDg1/KS9hcmMtYW5nbGVy/ZmlzaC1hcmMyLXBy/b2QtaW5mb2JhZS5z/My5hbWF6b25hd3Mu/Y29tL3B1YmxpYy9D/T08zSFE0MzJCRUVK/R1BYNEc3TkdDRE9W/NC5qcGc","4", 6)
manager.addProduct("Hamburguesa", "de Remolacha", 600, "https://i.ibb.co/3dHmdrp/Hamburguesa-De-Remolacha.jpg", "2", 36)


console.log(manager.getProducts())
//lista los productos y arroja error por la descripcion inexistente y por el producto con id code repetido pero lo lista igual

console.log(manager.getProductById(2))
console.log(manager.getProductById(6))//arroja error por Id inexistente
