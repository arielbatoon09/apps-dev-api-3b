import { Router } from "express";

const router = Router();

// Routes
router.get("/tests", function(req, res) {
  return res.status(200).json({
    "status": "success",
    "message": "Hello World!"
  })
})

export default router;