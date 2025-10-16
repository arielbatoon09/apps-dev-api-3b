import ProductRepository from "@/repositories/ProductRepository";

export async function productListService() {
  const result = await ProductRepository.findAll();

  return {
    status: "success",
    message: "Fetched Product Successfully!",
    data: result
  }
}