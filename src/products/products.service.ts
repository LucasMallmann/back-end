import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {

  private products = [
    {
      id: 1,
      item: 'Jersey Los Angeles Angels',
      description: 'Jersey number 17 - Shohei Otani for Los Angeles Angels',
      sku: 123456,
      price: 189.55,
      quantity: 10,
      color: [
        'red',
        'grey',
        'white',
      ],
      spotlight: false,
    },
    {
      id: 2,
      item: 'Jersey Los Angeles Angels',
      description: 'Jersey number 27 - Mike Trout for Los Angeles Angels',
      sku: 123456,
      price: 189.55,
      quantity: 2,
      color: [
        'red',
        'grey',
        'white',
      ],
      spotlight: true,
    },
  ];

  getAllProducts() {
    return this.products;
  }

  getProductsSpotlights() {
    const listSpotlights = this.products.filter(product => product.spotlight);

    return listSpotlights;
  }

}
