import { IProduct } from "@/types/product";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ProductRepository {
  async create(data: IProduct) {
    return prisma.product.create({ data });
  }
  

  async findAll() {
    return prisma.product.findMany({ orderBy: { name: 'asc' } });
  }

  async findActiveProducts() {
    return prisma.product.findMany({ where: { isActive: true }, orderBy: { name: 'asc' } });
  }

  async findById(id: string) {
    return prisma.product.findFirst({ where: { id } });
  }

  async update(id: string, data: Partial<{ name: string, description: string, stock: number, price: number }>) {
    return prisma.product.update({ where: { id }, data });
  }

  async delete(id: string) {
    return prisma.product.delete({ where: { id } });
  }

  async softDelete(id: string) {
    return prisma.product.update({ where: { id }, data: { isActive: false } });
  }

  async restore(id: string) {
    return prisma.product.update({ where: { id }, data: { isActive: true } });
  }
}

export default new ProductRepository();