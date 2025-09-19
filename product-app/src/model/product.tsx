// src/models/product.ts

export class Product {
  id: number;
  name: string;
  description: string;
  category: string;
  tags: string[];
  price: number;
  stock: number;

  constructor(
    id: number,
    name: string,
    description: string,
    category: string,
    tags: string[],
    price: number,
    stock: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.tags = tags;
    this.price = price;
    this.stock = stock;
  }
}
