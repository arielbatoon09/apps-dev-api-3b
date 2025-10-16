import ProductRepository from "@/repositories/ProductRepository";

export async function softdeleteProductService(id: string) {
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
  if (!existProduct.isActive) {
    return {
      status: "error",
      message: "Product is already deactivated!"
    }
  }

  // If not deactivated, update the isActive to FALSE
  await ProductRepository.softDelete(id);

  return {
    status: "success",
    message: `Deactivated Product ID: ${id}`,
    data: null
  }
}