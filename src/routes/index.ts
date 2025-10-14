import { Router } from "express";
import ProductController from "@/controllers/ProductController";

const router = Router();

// Routes
router.get("/v1/product-list", ProductController.productList);
router.post("/v1/product-create", ProductController.createProduct);

export default router;