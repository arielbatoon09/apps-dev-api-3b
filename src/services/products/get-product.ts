import ProductRepository from "@/repositories/ProductRepository";

// Get All Products regardless if it's active or not
export async function getAllProductsService() {
  const result = await ProductRepository.findAll();

  return {
    status: "success",
    message: "Fetched Product Successfully!",
    data: result
  }
}

// Get All Active Products
export async function getActiveProductsService() {
  const result = await ProductRepository.findActiveProducts();

  return {
    status: "success",
    message: "Fetched Active Products Successfully!",
    data: result
  }
}

// Get Product by ID
export async function getProductByIdService(id: string) {
  // Check if Product ID was provided
  if (!id) {
    return { status: "error", message: "Product ID is missing!" };
  }

  // Check if Product is existing and retrieve
  const existProduct = await ProductRepository.findById(id);
  if (!existProduct) {
    return { status: "error", message: "Product is not found!" };
  }

  return {
    status: "success",
    message: `Fetched Product ID: ${id} Successfully!`,
    data: existProduct
  }
}