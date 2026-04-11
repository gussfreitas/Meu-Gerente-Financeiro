import { Router } from "express";
import apiRoutes from "./v1.js";
import { sequelize } from "../models/index.js";

const router = Router();

router.get("/db/health", async (_req, res) => {
  try {
    await sequelize.authenticate();
    res.json({ status: "ok" });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

router.use("/v1", apiRoutes);

export default router;
