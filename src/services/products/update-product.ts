import ProductRepository from "@/repositories/ProductRepository";
import { ProductData } from "@/types/product";

// Update Products
export async function updateProductService(id: string, data: ProductData) {
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

// Restore Product
export async function restoreProductService(id: string) {
  // Check if ID is provided
  if (!id) {
    return {
      status: "error",
      message: "Product ID is missing!"
    }
  }

  // Check if Product ID is exist
  const existProduct = await ProductRepository.findById(id);
  if (!existProduct) {
    return {
      status: "error",
      message: "Product Not Found!"
    }
  }

  // Check if deactivated product
  if (existProduct.isActive) {
    return {
      status: "error",
      message: "Product is already activated!"
    }
  }

  // Activate Product
  await ProductRepository.restore(id);

  return {
    status: "success",
    message: `Activated Product ID: ${id}`,
    data: null
  }
}