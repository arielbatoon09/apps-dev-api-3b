import ProductRepository from "@/repositories/ProductRepository";

export const productListService = async () => {
  const result = await ProductRepository.findAll();

  return {
    status: "success",
    message: "Created Product Successfully!",
    data: result
  }
}