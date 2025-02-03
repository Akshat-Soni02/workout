import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  getAllSets,
  createNewSet,
  updateSetById,
  deleteSetById,
} from "../controller/setController.js";

const router = express.Router();
router.get("/exerciseId", isAuthenticated, getAllSets);
router.post("/", isAuthenticated, createNewSet);
router.put("/:id", isAuthenticated, updateSetById);
router.delete("/:id", isAuthenticated, deleteSetById);
export default router;
