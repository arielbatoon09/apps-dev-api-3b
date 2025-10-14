import ProductRepository from "@/repositories/ProductRepository";

export interface CreateProductData {
  name: string;
  description: string;
  price: number;
  stock: number;
}

export const createProductService = async (data: CreateProductData) => {
  // Validate Required Fields
  if (!data.name || !data.description || data.price === undefined || data.stock === undefined) {
    return {
      status: "error",
      message: "Missing fields!"
    }
  }

  // Validate price and stock if negative numbers
  if (data.price < 0 || data.stock < 0) {
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