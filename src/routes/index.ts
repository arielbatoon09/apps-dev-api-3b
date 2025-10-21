import { Router } from "express";
import ProductController from "@/controllers/ProductController";

const router = Router();

// Product Routes
router.get("/v1/product-list", ProductController.getAllProducts);
router.get("/v1/product-active-list", ProductController.getActiveProducts);
router.post("/v1/product-by-id", ProductController.getProductById);
router.post("/v1/product-create", ProductController.createProduct);
router.post("/v1/product-update", ProductController.updateProduct);
router.post("/v1/product-hard-delete", ProductController.deleteProduct);
router.post("/v1/product-soft-delete", ProductController.softdeleteProduct);
router.post("/v1/product-restore", ProductController.restoreProduct);

export default router;