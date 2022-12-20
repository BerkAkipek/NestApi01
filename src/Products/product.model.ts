import { ApiProperty } from '@nestjs/swagger';

export class Product {
  id: string;
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  price: number;

  constructor(id: string, title: string, desc: string, price: number) {
    this.id = id;
    this.title = title;
    this.description = desc;
    this.price = price;
  }
}
