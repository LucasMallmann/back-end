import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) { }

  @Get('spotlights')
  async getProductsSpotlights() {
    return this.productsService.getProductsSpotlights();
  }

  @Get()
  async getAllProducts() {
    return this.productsService.getAllProducts();
  }


}
