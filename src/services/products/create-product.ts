import ProductRepository from "@/repositories/ProductRepository";
import { ProductData } from "@/types/product";

export async function createProductService(data: ProductData) {
  // Validate Required Fields
  if (!data.name || !data.description || data.price === undefined || data.stock === undefined) {
    return {
      status: "error",
      message: "Missing fields!"
    }
  }

  // Validate price and stock if negative numbers
  if (data.price < 1 || data.stock < 1) {
    return {
      status: "error",
      message: "Price and stock must be positive numbers."
    }
  }

  // Create Product
  const result = await ProductRepository.create({
    name: data.name,
    description: data.description,
    price: data.price,
    stock: data.stock
  });

  return {
    status: "success",
    message: "Created Product Successfully!",
    data: result
  }
}