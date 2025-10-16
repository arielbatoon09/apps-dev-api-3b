import ProductRepository from "@/repositories/ProductRepository";

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