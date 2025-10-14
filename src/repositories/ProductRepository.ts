import { CreateProductData } from "@/services/products";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ProductRepository {
  async create(data: CreateProductData) {
    return prisma.product.create({ data });
  }

  async findAll() {
    return prisma.product.findMany({ where: { isActive: true }, orderBy: { name: 'asc' } });
  }
}

export default new ProductRepository();