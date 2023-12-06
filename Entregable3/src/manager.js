import { ProductManager } from "./ProductManager";

let miPrimeraTienda = new ProductManager("./products.json");

miPrimeraTienda.addProduct(
    "Milanesa",
    "de Soja",
    2000,
    "https://i.ibb.co/VT9N9wN/Milanesa-Soja.jpg",
    "1",
    24
);
miPrimeraTienda.addProduct(
    "Albóndiga",
    "de Lentejas",
    1800,
    "https://i.ibb.co/GHYbvTR/Albondigas.jpg",
    "2",
    12
);
miPrimeraTienda.addProduct(
    "Pizza",
    "Vegana",
    4000,
    "https://imgs.search.brave.com/siJH1qUyw-koncJWz9guBi6pYzLTaeE0PwbXKuf8puc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb2JhZS5jb20v/bmV3LXJlc2l6ZXIv/YlJpbVdWeFU5TGpN/Sk8tQ2pxYjJyRWV2/VVVZPS9maWx0ZXJz/OmZvcm1hdCh3ZWJw/KTpxdWFsaXR5KDg1/KS9hcmMtYW5nbGVy/ZmlzaC1hcmMyLXBy/b2QtaW5mb2JhZS5z/My5hbWF6b25hd3Mu/Y29tL3B1YmxpYy9D/T08zSFE0MzJCRUVK/R1BYNEc3TkdDRE9W/NC5qcGc",
    "4",
    6
);