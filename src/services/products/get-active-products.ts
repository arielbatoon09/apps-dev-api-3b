import ProductRepository from "@/repositories/ProductRepository";

export async function getActiveProductsService() {
  const result = await ProductRepository.findActiveProducts();

  return {
    status: "success",
    message: "Fetched Active Products Successfully!",
    data: result
  }
}