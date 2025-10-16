import ProductRepository from "@/repositories/ProductRepository";
import { IProduct } from "@/types/product";

export async function updateProductService(id: string, data: IProduct) {
  // Check if id is provided
  if (!id) {
    return {
      status: "error",
      message: "Product ID is missing!"
    }
  }

  // Check if the product is exist
  const existingProduct = await ProductRepository.findById(id);
  if (!existingProduct) {
    return {
      status: "error",
      message: "Product Not Found!"
    }
  }

  // Validate price and stock if negative numbers
  if (data.price < 1 || data.stock < 1) {
    return {
      status: "error",
      message: "Price and stock must be positive numbers."
    }
  }

  // Update Product
  const result = await ProductRepository.update(id, data);

  return {
    status: "success",
    message: "Updated Product Successfully!",
    data: result
  }
}