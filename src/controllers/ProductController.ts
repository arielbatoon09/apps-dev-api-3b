import { Request, Response } from "express";
import { createProductService, productListService } from "@/services/products";

class ProductController {
  // Product List
  async productList(req: Request, res: Response) {
    const result = await productListService();

    return res.status(200).json(result);
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

  // Product Delete
}

export default new ProductController();