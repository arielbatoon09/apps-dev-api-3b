import { Request, Response } from "express";
import { 
  createProductService, 
  getAllProductsService, 
  updateProductService, 
  deleteProductService, 
  getActiveProductsService, 
  softdeleteProductService, 
  restoreProductService,
  getProductByIdService
} from "@/services/products";

class ProductController {
  // Product List regardless if is Active or Not
  async getAllProducts(req: Request, res: Response) {
    const result = await getAllProductsService();

    return res.status(200).json(result);
  }

  // Get Active Products
  async getActiveProducts(req: Request, res: Response) {
    const result = await getActiveProductsService();

    return res.status(200).json(result);
  }

  // Get Product by ID
  async getProductById(req: Request, res: Response) {
    const { id } = req.body;

    const result = await getProductByIdService(id);
    
    if (result.status === "error") {
      return res.status(400).json(result);
    }
    return res.status(201).json(result);
  }

  // Product Create
  async createProduct(req: Request, res: Response)  {
    const result = await createProductService(req.body);
    if (result.status === "error") {
      return res.status(400).json(result);
    }
    return res.status(201).json(result);
  }

  // Product Update
  async updateProduct(req: Request, res: Response) {
    const { id, ...data } = req.body;

    const result = await updateProductService(id, data);

    if (result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }

  // Product Delete
  async deleteProduct(req: Request, res: Response) {
    const { id } = req.body;

    const result = await deleteProductService(id);

    if (result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }

  // Soft Delete Product
  async softdeleteProduct(req: Request, res: Response) {
    const { id } = req.body;

    const result = await softdeleteProductService(id);

    if (result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }

  // Restore Product
  async restoreProduct(req: Request, res: Response) {
    const { id } = req.body;

    const result = await restoreProductService(id);

    if (result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }
}

export default new ProductController();