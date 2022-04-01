export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    constructor(id, name, description = '', price = 0, imageUrl = 'https://www.hummingbirdhigh.com/wp-content/uploads/2020/05/01_Rainbow-Unicorn-Cake_IMG_0008.jpg') {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.imageUrl = imageUrl
    }
}
