interface Price {
    old_price: number | null;
    current_price: number;
}

interface Image {
    url: string;
}

interface Item {
    id: string;
    name: string;
    code: string | null;
    price: Price;
    image: Image;
    material: number;
}

interface Material {
    id: number;
    name: string;
}
