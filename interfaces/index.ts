export interface Children {
    children: React.ReactNode;
}

export interface Cards {
    id: number
    img:string
    gender: string
    category:string
}

export interface Typography {
    css:string;
    text:string;
}

export interface Product {
    _id: string;
    name: string;
    description: string;
    category: string,
    gtin: string;
    photos: string[];
    price: number,
    stock: number;
}

export interface ProductParam {
    product: {
        product: Product;
    };
    products: {
        products: Product[]
    }
}