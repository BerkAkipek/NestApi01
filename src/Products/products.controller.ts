import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Product } from './product.model';
import { ProductService } from './products.service';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiCreatedResponse({ type: Product })
  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    const generatedId = this.productService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return generatedId;
  }

  @ApiCreatedResponse({ type: Product })
  @Get()
  getAllProducts() {
    return this.productService.getProducts();
  }

  @ApiCreatedResponse({ type: Product })
  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productService.getSingleProduct(prodId);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    this.productService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
    return null;
  }

  @Delete(':id')
  removeProduct(@Param('id') prodId: string) {
    this.productService.deleteProduct(prodId);
    return null;
  }
}
